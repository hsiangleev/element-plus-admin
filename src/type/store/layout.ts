export enum IMenubarStatus {
    PCE, // 电脑展开
    PCN, // 电脑合并
    PHE, // 手机展开
    PHN // 手机合并
}
export interface ISetting {
    theme: number
    showTags: boolean
    color: {
        primary: string
    }
}
export interface IToken {
    ACCESS_TOKEN: string
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
        name: string,
        role: Array<string>
    }
    // 标签栏
    tags: {
        tagsList: Array<ITagsList>
        cachedViews: Array<string>
    }
    token: IToken
    setting: ISetting
    isLoading: boolean
}
export interface IMenubarList {
    parentId?: number | string
    id?: number | string
    name: string
    path: string
    redirect?: string | {name: string}
    meta: {
        icon: string
        title: string
        permission?: Array<string>
        activeMenu?: string // 路由设置了该属性，则会高亮相对应的侧边栏
        noCache?: boolean // 页面是否不缓存
        hidden?: boolean // 是否隐藏路由
        alwaysShow?: boolean // 当子路由只有一个的时候是否显示当前路由
    }
    component: (() => Promise<typeof import('*.vue')>) | string
    children?: Array<IMenubarList>
}

export interface ITagsList {
    name: string
    title: string
    path: string
    isActive: boolean
}