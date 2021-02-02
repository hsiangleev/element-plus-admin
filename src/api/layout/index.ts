import request from '/@/utils/request'
import { AxiosPromise } from 'axios'
import { store } from '/@/store/index'
const api = {
    login: '/login',
    getUser: '/getUser',
    getRouterList: '/getRoute'
}

export interface loginParam {
    username: string,
    password: string
}
export function login(param: loginParam): AxiosPromise {
    return request({
        url: api.login,
        method: 'post',
        data: param
    })
}
export function getUser(): AxiosPromise {
    return request({
        url: api.getUser,
        method: 'get',
        data: { token: store.state.layout.token.ACCESS_TOKEN }
    })
}
export function getRouterList(): AxiosPromise {
    return request({
        url: api.getRouterList,
        method: 'get',
        data: { token: store.state.layout.token.ACCESS_TOKEN }
    })
}