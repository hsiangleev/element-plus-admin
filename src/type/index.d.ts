import { ILayout } from '/@/type/store/layout'

declare global {
    interface IResponse<T = any> {
        Code: number;
        Msg: string;
        Data: T;
    }
    interface IObject<T> {
        [index: string]: T
    }
    
    interface IState {
        layout: ILayout
    }
    interface ITable<T = any> {
        data : Array<T>
        total: number
        page: number
        size: number
    }
}