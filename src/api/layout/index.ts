import request from '/@/utils/request'
import { AxiosPromise } from 'axios'
const api = {
    login: '/login',
    getRouterList: '/getRouterList'
}

export interface loginParam {
    username: string,
    password: string
}
export function login (param: loginParam): AxiosPromise {
    return request({
        url: api.login,
        method: 'post',
        data: param
    })
}
export function getRouterList (): AxiosPromise {
    return request({
        url: api.getRouterList,
        method: 'get'
    })
}