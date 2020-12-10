const pathAliasMap = {
    '@src/': '/src/',
    '@root/': '/',
}
export default {
    proxy: {
        '/api': {
            target: 'http://localhost:3001/',
            changeOrigin: true,
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    },
    port: 3002,
    // cmd模块更改为es6模块
    optimizeDeps: {
        // include: ['jsencrypt', 'axios', 'NProgress']
        include: ['axios', 'NProgress', 'mockjs']
    },
    resolvers: [
        {
            alias(path: string): string {
                for (const [slug, res] of Object.entries(pathAliasMap)) {
                    if (path.startsWith(slug)) {
                        return path.replace(slug, res)
                    }
                }
            },
        },
    ],
}