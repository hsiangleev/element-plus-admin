import router from '/@/router'
import { store } from '/@/store/index'
import { configure, start, done } from 'nprogress'

configure({ showSpinner: false })

const loginRoutePath = '/Login'
const defaultRoutePath = '/'

router.beforeEach(async(to, from) => {
    start()
    const { layout } = store.state
    // 判断当前是否在登陆页面
    if (to.path.toLocaleLowerCase() === loginRoutePath.toLocaleLowerCase()) {
        done()
        if(layout.token.ACCESS_TOKEN) return typeof to.query.from === 'string' ? decodeURIComponent(decodeURIComponent(to.query.from)) : defaultRoutePath
        return
    }
    // // 判断是否登录
    if(!layout.token.ACCESS_TOKEN) {
        return loginRoutePath + (to.fullPath ? `?from=${encodeURIComponent(encodeURIComponent(to.fullPath))}` : '')
    }
    document.title = document.title ? `${document.title.split(' |')[0]} | ${to.meta.title}` : to.meta.title
    // 判断是否还没添加过路由
    if(layout.menubar.menuList.length === 0) {
        await store.dispatch('layout/GenerateRoutes')
        await store.dispatch('layout/getUser')
        for(let i = 0;i < layout.menubar.menuList.length;i++) {
            router.addRoute(layout.menubar.menuList[i])
        }
        store.commit('layout/concatAllowRoutes')
        return to.fullPath
    }
    store.commit('layout/changeTagNavList', to) // 切换导航，记录打开的导航(标签页)

    // 离开当前页面时是否需要添加当前页面缓存
    !new RegExp(/^\/redirect\//).test(from.path) 
        && store.state.layout.tags.tagsList.some(v => v.name === from.name) 
        && !store.state.layout.tags.cachedViews.some(v => v === from.name)
        && store.commit('layout/addCachedViews', { name: from.name, noCache: from.meta.noCache })
    
})

router.afterEach(() => {
    done()
})