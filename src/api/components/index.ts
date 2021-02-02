import request from '/@/utils/request'
import { AxiosPromise } from 'axios'
const api = {
    getTableList: '/getTableList'
}
export type ITag = '所有' | '家' | '公司' | '学校' | '超市'
export interface ITableList {
    page: number
    size: number
    tag: ITag
}
export function getTableList(tableList: ITableList): AxiosPromise {
    return request({
        url: api.getTableList,
        method: 'get',
        data: tableList
    })
}