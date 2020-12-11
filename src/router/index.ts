import { createRouter, createWebHashHistory } from 'vue-router'
import { IMenubarList } from '/@/type/store/layout'

const components = {
    Layout: () => import('/@/layout/index.vue'),
    Redirect: () => import('/@/layout/redirect.vue'),
    404: () => import('/@/views/404.vue'),
    Workplace: () => import('/@/views/Dashboard/Workplace.vue'),

    Login: () => import('/@/views/User/Login.vue'),
}

// 免登录页面
export const allowRouter:Array<IMenubarList> = [
    {
        name: '404',
        path: '/404',
        meta: { title: '页面不存在', icon: 'el-icon-eleme' },
        component: components['404'],
        hidden: true
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
        name: 'Dashboard',
        path: '/',
        component: components.Layout,
        redirect: '/Dashboard/Workplace',
        meta: { title: '仪表盘', icon: 'el-icon-eleme' },
        children: [
            {
                name: 'Workplace',
                path: '/Dashboard/Workplace',
                component: components.Workplace,
                meta: { title: '工作台', icon: 'el-icon-s-tools' }
            }
        ]
    },
    {
        name: 'Login',
        path: '/Login',
        component: components.Login,
        meta: { title: '登录', icon: 'el-icon-eleme' },
        hidden: true
    },
]

const router = createRouter({
    history: createWebHashHistory(),        // createWebHistory
    routes: allowRouter,
})

export default router