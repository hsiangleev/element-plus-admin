export enum IMenubarStatus {
    PCE,    // 电脑展开
    PCN,    // 电脑合并
    PHE,    // 手机展开
    PHN     // 手机合并
}
export interface ILayout {
    // 左侧导航栏
    menubar: {
        status: IMenubarStatus
        menuList: Array<IMenubarList>
        isPhone: boolean
    }
    // 用户信息
    userInfo: {
        name: string
    }
    // 标签栏
    tags: {
        tagsList: Array<ITagsList>
        cachedViews: Array<string>
    }
    ACCESS_TOKEN: string
    isLoading: boolean
}
export interface IMenubarList {
    parentId?: number | string
    id?: number | string
    name: string
    path: string
    component: () => Promise<typeof import('*.vue')> | string
    redirect?: string
    children?: Array<IMenubarList>
    meta: {
        icon: string
        title: string
        permission?: Array<string>
        activeMenu?: string
        noCache?: boolean
        affix?:boolean
    }
    hidden?: boolean
}
export interface ITagsList {
    name: string
    title: string
    path: string
    isActive: boolean
}