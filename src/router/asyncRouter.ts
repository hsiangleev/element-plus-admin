import { IMenubarList } from '/@/type/store/layout'
import { listToTree } from '/@/utils/listToTree'
import { store } from '/@/store/index'
import { IObject } from '../global'
// 引入动态路由页面
const modules = import.meta.glob('../views/**/**.vue')
const components:IObject<() => Promise<typeof import('*.vue')>> = {
    Layout: () => import('/@/layout/index.vue')
}
const componentsIngore:Array<string> = ['login', 'Workplace'] // 忽略的页面
Object.keys(modules).forEach(key => {
    const nameMatch = key.match(/^\.\.\/views\/(.*)\/(.*)\.vue/)
    if(!nameMatch) return
    let [,,name] = nameMatch
    // 如果页面以Index命名，则使用父文件夹作为name
    if(nameMatch[2] === 'Index') {
        const nameSplit = nameMatch[1].split('/')
        name = nameSplit[nameSplit.length - 1]
    }
    if(!componentsIngore.includes(name)) {
        components[name] = modules[key] as () => Promise<typeof import('*.vue')>
    }
})

const asyncRouter:Array<IMenubarList> = [
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: components['404'],
        meta: {
            title: 'NotFound',
            icon: '',
            hidden: true
        }, 
        redirect: {
            name: '404'
        }
    }
]

export const generatorDynamicRouter = (data:Array<IMenubarList>):void => {
    const routerList:Array<IMenubarList> = listToTree(data, 0)
    asyncRouter.forEach(v => routerList.push(v))
    const f = (data:Array<IMenubarList>, pData:IMenubarList|null) => {
        for(let i = 0,len = data.length;i < len;i++) {
            const v:IMenubarList = data[i]
            if(typeof v.component === 'string') v.component = components[v.component]
            if(!v.meta.permission || pData && v.meta.permission.length === 0) {
                v.meta.permission = pData && pData.meta && pData.meta.permission ? pData.meta.permission : []
            }
            if(v.children && v.children.length > 0) {
                f(v.children, v)
            }
        }
    }
    f(routerList, null)
    store.commit('layout/setRoutes', routerList)
}