import { IMenubarList } from '/@/type/store/layout'
export const user = [
    { name: 'admin', pwd: 'admin' },
    { name: 'dev', pwd: 'dev' },
    { name: 'test', pwd: 'test' }
]

export const role = [
    { name: 'admin', description: '管理员' },
    { name: 'dev', description: '开发人员' },
    { name: 'test', description: '测试人员' }
]

export const user_role = [
    { userName: 'admin', roleName: 'admin' },
    { userName: 'dev', roleName: 'dev' },
    { userName: 'test', roleName: 'test' }
]

export const permission = [
    { name: 'add', description: '新增' },
    { name: 'update', description: '修改' },
    { name: 'remove', description: '删除' }
]

export const role_route = [
    { roleName: 'admin', id: 1, permission: [] },
    { roleName: 'admin', id: 10, permission: [] },
    { roleName: 'admin', id: 2, permission: [] },
    { roleName: 'admin', id: 20, permission: [] },
    { roleName: 'admin', id: 21, permission: [] },
    { roleName: 'admin', id: 22, permission: [] },
    { roleName: 'admin', id: 3, permission: [] },
    { roleName: 'admin', id: 30, permission: [] },
    { roleName: 'admin', id: 300, permission: [] },
    { roleName: 'admin', id: 31, permission: [] },
    { roleName: 'admin', id: 310, permission: [] },
    { roleName: 'admin', id: 4, permission: [] },
    { roleName: 'admin', id: 40, permission: [] },
    { roleName: 'admin', id: 41, permission: [] },
    { roleName: 'admin', id: 42, permission: [] },
    { roleName: 'admin', id: 43, permission: [] },
    { roleName: 'admin', id: 5, permission: [] },
    { roleName: 'admin', id: 50, permission: ['add', 'update', 'remove'] },

    { roleName: 'dev', id: 1, permission: [] },
    { roleName: 'dev', id: 10, permission: [] },
    { roleName: 'dev', id: 5, permission: [] },
    { roleName: 'dev', id: 50, permission: ['add'] },

    { roleName: 'test', id: 1, permission: [] },
    { roleName: 'test', id: 10, permission: [] },
    { roleName: 'test', id: 5, permission: [] },
    { roleName: 'test', id: 50, permission: ['update'] }
]

export const route:Array<IMenubarList> = [
    {
        id: 2,
        parentId: 0,
        name: 'Project',
        path: '/Project',
        component: 'Layout',
        redirect: '/Project/ProjectList',
        meta: { title: '项目管理', icon: 'el-icon-phone' }
    },
    {
        id: 20,
        parentId: 2,
        name: 'ProjectList',
        path: '/Project/ProjectList',
        component: 'ProjectList',
        meta: { title: '项目列表', icon: 'el-icon-goods' }
    },
    {
        id: 21,
        parentId: 2,
        name: 'ProjectDetail',
        path: '/Project/ProjectDetail/:projName',
        component: 'ProjectDetail',
        meta: { title: '项目详情', icon: 'el-icon-question', activeMenu: '/Project/ProjectList', hidden: true }
    },
    {
        id: 22,
        parentId: 2,
        name: 'ProjectImport',
        path: '/Project/ProjectImport',
        component: 'ProjectImport',
        meta: { title: '项目导入', icon: 'el-icon-help' }
    },
    {
        id: 3,
        parentId: 0,
        name: 'Nav',
        path: '/Nav',
        component: 'Layout',
        redirect: '/Nav/SecondNav/ThirdNav',
        meta: { title: '多级导航', icon: 'el-icon-picture' }
    },
    {
        id: 30,
        parentId: 3,
        name: 'SecondNav',
        path: '/Nav/SecondNav',
        redirect: '/Nav/SecondNav/ThirdNav',
        component: 'SecondNav',
        meta: { title: '二级导航', icon: 'el-icon-camera', alwaysShow: true }
    },
    {
        id: 300,
        parentId: 30,
        name: 'ThirdNav',
        path: '/Nav/SecondNav/ThirdNav',
        component: 'ThirdNav',
        meta: { title: '三级导航', icon: 'el-icon-s-platform' }
    },
    {
        id: 31,
        parentId: 3,
        name: 'SecondText',
        path: '/Nav/SecondText',
        redirect: '/Nav/SecondText/ThirdText',
        component: 'SecondText',
        meta: { title: '二级文本', icon: 'el-icon-s-opportunity', alwaysShow: true }
    },
    {
        id: 310,
        parentId: 31,
        name: 'ThirdText',
        path: '/Nav/SecondText/ThirdText',
        component: 'ThirdText',
        meta: { title: '三级文本', icon: 'el-icon-menu' }
    },
    {
        id: 4,
        parentId: 0,
        name: 'Components',
        path: '/Components',
        component: 'Layout',
        redirect: '/Components/OpenWindowTest',
        meta: { title: '组件测试', icon: 'el-icon-phone' }
    },
    {
        id: 40,
        parentId: 4,
        name: 'OpenWindowTest',
        path: '/Components/OpenWindowTest',
        component: 'OpenWindowTest',
        meta: { title: '选择页', icon: 'el-icon-goods' }
    },
    {
        id: 41,
        parentId: 4,
        name: 'CardListTest',
        path: '/Components/CardListTest',
        component: 'CardListTest',
        meta: { title: '卡片列表', icon: 'el-icon-question' }
    },
    {
        id: 42,
        parentId: 4,
        name: 'TableSearchTest',
        path: '/Components/TableSearchTest',
        component: 'TableSearchTest',
        meta: { title: '表格搜索', icon: 'el-icon-question' }
    },
    {
        id: 43,
        parentId: 4,
        name: 'ListTest',
        path: '/Components/ListTest',
        component: 'ListTest',
        meta: { title: '标签页列表', icon: 'el-icon-question' }
    },
    {
        id: 5,
        parentId: 0,
        name: 'Permission',
        path: '/Permission',
        component: 'Layout',
        redirect: '/Permission/Directive',
        meta: { title: '权限管理', icon: 'el-icon-phone', alwaysShow: true }
    },
    {
        id: 50,
        parentId: 5,
        name: 'Directive',
        path: '/Permission/Directive',
        component: 'Directive',
        meta: { title: '指令管理', icon: 'el-icon-goods' }
    }
]