export enum IMenubarStatus {
    PCE, // 电脑展开
    PCN, // 电脑合并
    PHE, // 手机展开
    PHN // 手机合并
}
export interface ISetting {
    theme: number
    showTags: boolean
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
interface IMenubar {
    parentId?: number | string
    id?: number | string
    name: string
    path: string
    redirect?: string | {name: string}
    meta: {
        icon: string
        title: string
        permission?: Array<string>
        activeMenu?: string
        noCache?: boolean
    }
    hidden?: boolean
}
export interface IMenubarList extends IMenubar {
    component: (() => Promise<typeof import('*.vue')>)
    children?: Array<IMenubarList>
}
export interface IMenubarRoute extends IMenubar {
    component: string
    children?: Array<IMenubarRoute>
}

export interface ITagsList {
    name: string
    title: string
    path: string
    isActive: boolean
}