import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: [
            { find: '/@', replacement: path.resolve(__dirname, 'src') }
        ]
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
        sourcemap: true
        // manifest: true
        // rollupOptions: {
        //     output: {
        //         manualChunks(id) {
        //             if (id.includes('node_modules/element-plus')) return 'element-plus'
        //         }
        //     }
        // },
        // chunkSizeWarningLimit: 600
    },
    optimizeDeps: {
        // include: ['axios', 'nprogress', 'mockjs']
    },
    plugins: [vue()],
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
})
