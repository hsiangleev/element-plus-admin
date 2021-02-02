import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    alias: [
        { find: '/@', replacement: path.resolve(__dirname, 'src') }
    ],
    // assetsInclude: 'public',
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
        // cssCodeSplit: true
    },
    optimizeDeps: {
        include: ['axios', 'nprogress', 'mockjs']
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
