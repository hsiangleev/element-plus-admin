import request from '/@/utils/request'
import { AxiosResponse } from 'axios'
import { store } from '/@/store/index'
import { IMenubarList } from '/@/type/store/layout'

const api = {
    login: '/login',
    getUser: '/getUser',
    getRouterList: '/getRoute'
}

export interface loginParam {
    username: string,
    password: string
}

export function login(param: loginParam):Promise<AxiosResponse<IResponse<string>>> {
    return request({
        url: api.login,
        method: 'post',
        data: param
    })
}

interface IGetuserRes {
    name: string
    role: Array<string>
}

export function getUser(): Promise<AxiosResponse<IResponse<IGetuserRes>>> {
    return request({
        url: api.getUser,
        method: 'get',
        data: { token: store.state.layout.token.ACCESS_TOKEN }
    })
}
export function getRouterList(): Promise<AxiosResponse<IResponse<Array<IMenubarList>>>> {
    return request({
        url: api.getRouterList,
        method: 'get',
        data: { token: store.state.layout.token.ACCESS_TOKEN }
    })
}