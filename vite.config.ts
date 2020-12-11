import path from 'path'
import { UserConfig } from 'vite'

const config:UserConfig = {
    base: './',
    alias: {
        '/@/': path.resolve(__dirname, 'src')
    },
    assetsDir: 'public',
    proxy: {
        '/api': {
            target: 'http://localhost:3001/',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    },
    port: 3002,
    optimizeDeps: {
        include: ['axios', 'NProgress', 'mockjs']
    }
}
export default config