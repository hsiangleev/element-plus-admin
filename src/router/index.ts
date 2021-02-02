import { createRouter, createWebHashHistory } from 'vue-router'
import { IMenubarList } from '/@/type/store/layout'

const components = {
    Layout: () => import('/@/layout/index.vue'),
    Redirect: () => import('/@/layout/redirect.vue'),
    404: () => import('/@/views/ErrorPage/404.vue'),
    Workplace: () => import('/@/views/Dashboard/Workplace.vue'),

    Login: () => import('/@/views/User/Login.vue')
}

// 静态路由页面
export const allowRouter:Array<IMenubarList> = [
    {
        name: 'Dashboard',
        path: '/',
        component: components['Layout'],
        redirect: '/Dashboard/Workplace',
        meta: { title: '仪表盘', icon: 'el-icon-eleme' },
        children: [
            {
                name: 'Workplace',
                path: '/Dashboard/Workplace',
                component: components['Workplace'],
                meta: { title: '工作台', icon: 'el-icon-s-tools' }
            }
        ]
    },
    {
        name: 'ErrorPage',
        path: '/ErrorPage',
        meta: { title: '错误页面', icon: 'el-icon-eleme' },
        component: components['Layout'],
        redirect: '/ErrorPage/404',
        children: [
            {
                name: '404',
                path: '/ErrorPage/404',
                component: components['404'],
                meta: { title: '404', icon: 'el-icon-s-tools' }
            }
        ]
    },
    {
        name: 'Redirect',
        path: '/redirect/:pathMatch(.*)*',
        meta: {
            title: '重定向页面',
            icon: '',
            permission: []
        },
        hidden: true,
        component: components.Redirect
    },
    {
        name: 'Login',
        path: '/Login',
        component: components.Login,
        meta: { title: '登录', icon: 'el-icon-eleme' },
        hidden: true
    }
]

const router = createRouter({
    history: createWebHashHistory(), // createWebHistory
    routes: allowRouter
})

export default router