import { ILayout } from '/@/type/store/layout'

interface IObject<T> {
    [index: string]: T
}

interface IState {
    layout: ILayout
}