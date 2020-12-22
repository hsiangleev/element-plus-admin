import { login, loginParam, getRouterList } from '/@/api/layout/index'
import { ILayout, IMenubarStatus, ITagsList, IMenubarList } from '/@/type/store/layout'
import { IState } from '/@/type/store/index'
import { ActionContext } from 'vuex'
import router from '/@/router/index'
import { allowRouter } from '/@/router/index'
import { generatorDynamicRouter } from '/@/router/asyncRouter'

const state:ILayout = {
    menubar: {
        status: document.body.offsetWidth < 768 ? IMenubarStatus.PHN : IMenubarStatus.PCE,
        menuList: [],
        isPhone: document.body.offsetWidth < 768,
    },
    // 用户信息
    userInfo: {
        name: ''
    },
    // 标签栏
    tags: {
        tagsList: [
            { name: 'Workplace',title: '主页', path: '/Dashboard/Workplace', isActive: true },
        ],
        cachedViews: ['Workplace']
    },
    ACCESS_TOKEN: localStorage.getItem('ACCESS_TOKEN') || '',
    isLoading: false
}
const mutations = {
    changeCollapsed(state: ILayout):void {
        if(state.menubar.isPhone){
            state.menubar.status = state.menubar.status === IMenubarStatus.PHN ? IMenubarStatus.PHE : IMenubarStatus.PHN
        }else{
            state.menubar.status = state.menubar.status === IMenubarStatus.PCN ? IMenubarStatus.PCE : IMenubarStatus.PCN
        }
    },
    changeDeviceWidth(state: ILayout):void {
        if(document.body.offsetWidth < 768){
            state.menubar.isPhone = true
            state.menubar.status = IMenubarStatus.PHN
        }else{
            state.menubar.isPhone = false
            state.menubar.status = IMenubarStatus.PCE
        }
    },
    // 切换导航，记录打开的导航
    changeTagNavList(state: ILayout, cRouter:IMenubarList):void {
        if(new RegExp(/\/redirect\//).test(cRouter.path)) return       // 判断是否是重定向页面
        const index = state.tags.tagsList.findIndex(v=>v.path === cRouter.path)
        state.tags.tagsList.forEach(v=>v.isActive = false)
        // 判断页面是否打开过
        if(index !== -1){
            state.tags.tagsList[index].isActive = true
        }else{
            const tagsList:ITagsList = {
                name: cRouter.name,
                title: cRouter.meta.title,
                path: cRouter.path,
                isActive: true
            }
            state.tags.tagsList.push(tagsList)
        }
    },
    removeTagNav(state: ILayout, obj:{tagsList:ITagsList, cPath: string}):void {
        const index = state.tags.tagsList.findIndex(v=>v.path === obj.tagsList.path)
        if(state.tags.tagsList[index].path === obj.cPath && state.tags.tagsList.length > 1){
            state.tags.tagsList[index - 1].isActive = true
            state.tags.tagsList.splice(index, 1)
            mutations.removeCachedViews(state, obj.tagsList.name)
            router.push({ path: state.tags.tagsList[index - 1].path })
        }else{
            state.tags.tagsList.splice(index, 1)
            mutations.removeCachedViews(state, obj.tagsList.name)
        }
    },
    removeOtherTagNav(state: ILayout, tagsList:ITagsList):void {
        state.tags.tagsList.splice(1, state.tags.tagsList.length - 1)
        state.tags.cachedViews.splice(1, state.tags.cachedViews.length - 1)
        if(tagsList.name !== 'Workplace'){
            state.tags.tagsList.push(tagsList)
            state.tags.cachedViews.push(tagsList.name)
        }
        router.push({ path: tagsList.path })
    },
    removeAllTagNav(state: ILayout):void {
        state.tags.tagsList.splice(1, state.tags.tagsList.length - 1)
        state.tags.cachedViews.splice(1, state.tags.cachedViews.length - 1)
        router.push({ path: state.tags.tagsList[0].path })
    },
    // 添加缓存页面
    addCachedViews(state: ILayout, obj: {name: string, noCache: boolean}):void{
        if(obj.noCache || state.tags.cachedViews.includes(obj.name)) return
        state.tags.cachedViews.push(obj.name)
    },
    // 删除缓存页面
    removeCachedViews(state: ILayout, name: string):void{
        // 判断标签页是否还有该页面
        if(state.tags.tagsList.map(v=>v.name).includes(name)) return
        const { cachedViews } = state.tags
        for(let i = 0;i < cachedViews.length;i++){
            if(name === cachedViews[i]){
                cachedViews.splice(i, 1)
                break
            }
        }
    },
    login(state: ILayout, token = ''):void {
        state.ACCESS_TOKEN = token
        localStorage.setItem('ACCESS_TOKEN', token)
    },
    logout(state: ILayout):void {
        state.ACCESS_TOKEN = ''
        localStorage.removeItem('ACCESS_TOKEN')
        router.push({ path: '/Login' })
        // history.go(0)
    },
    setRoutes(state: ILayout, data: Array<IMenubarList>):void {
        state.menubar.menuList = data
    },
    concatAllowRoutes(state: ILayout):void {
        allowRouter.reverse().forEach(v=>state.menubar.menuList.unshift(v))
    },
}
const actions = {
    async login(context:ActionContext<ILayout,IState>, param: loginParam):Promise<void> {
        const res = await login(param)
        const token = res.data.Data
        context.commit('login', token)
    },
    async GenerateRoutes():Promise<void> {
        const res = await getRouterList()
        const { Data } = res.data
        generatorDynamicRouter(Data)
    }
}
const layoutState = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default layoutState