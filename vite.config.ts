import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const setAlias = (aliasArray: string[][]) => {
    return aliasArray.map(v => {
        return { find: v[0], replacement: path.resolve(__dirname, v[1]) }
    })
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    // console.log(command, env)

    return {
        resolve: {
            alias: setAlias([
                ['/@', 'src']
            ])
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3001/',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            },
            port: 3002
        },
        build: {
            sourcemap: true,
            manifest: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'element-plus': ['element-plus'],
                        echarts: ['echarts']
                    }
                }
            },
            chunkSizeWarningLimit: 600
        },
        plugins: [
            vue()
        ],
        css: {
            postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('tailwindcss'),
                    require('postcss-nested'),
                    require('postcss-simple-vars'),
                    require('postcss-import')
                ]
            }
        }
    }
}
