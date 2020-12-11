import router from '/@/router'
import { store } from '/@/store/index'
import NProgress from 'nprogress' // progress bar
// import { notification } from 'ant-design-vue'
// import { setDocumentTitle, domTitle } from '@/utils/domUtil'
// import { ACCESS_TOKEN } from '@/store/mutation-types'
// import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const loginRoutePath = '/Login'
const defaultRoutePath = '/'

router.beforeEach(async(to, from)=>{
    NProgress.start()
    const { layout } = store.state
    // 判断当前是否在登陆页面
    if (to.path.toLocaleLowerCase() === loginRoutePath.toLocaleLowerCase()) {
        NProgress.done()
        if(layout.ACCESS_TOKEN) return defaultRoutePath
        return
    }
    // // 判断是否登录
    if(!layout.ACCESS_TOKEN) {
        return loginRoutePath
    }
    // 判断是否还没添加过路由
    if(layout.menubar.menuList.length === 0){
        await store.dispatch('layout/GenerateRoutes')
        for(let i = 0;i < layout.menubar.menuList.length;i++){
            router.addRoute(layout.menubar.menuList[i])
        }
        store.commit('layout/concatAllowRoutes')
        return to.fullPath
    }
    store.commit('layout/changeTagNavList', to)         // 切换导航，记录打开的导航

    !new RegExp(/^\/redirect\//).test(from.path) 
        && store.state.layout.tags.tagsList.some(v=>v.name === from.name) 
        && !store.state.layout.tags.cachedViews.some(v=>v === from.name)
        && store.commit('layout/addCachedViews', { name: from.name, noCache: from.meta.noCache })
    
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})