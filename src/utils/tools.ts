import { IObject } from '/@/global'
import { ILocalStore } from '/@/type/utils/tools'
/**
 * 睡眠函数
 * @param time 
 */
export async function sleep(time:number):Promise<void> {
    await new Promise(resolve => {
        setTimeout(() => resolve, time)
    })
}
/**
 * 金额格式化
 * @param num 金额
 * @param symbol 金额前面修饰符号，如$,￥
 */
export function format(num:number|string, symbol = '￥'):string {
    if(Number.isNaN(Number(num))) return `${symbol}0.00`
    return symbol + (Number(num).toFixed(2))
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
/**
 * 取消金额格式化
 * @param str 金额
 */
export function unformat(str:string):number|string {
    const s = str.substr(1).replace(/\,/g, '')
    return Number.isNaN(Number(s)) || Number(s) === 0 ? '' : Number(s)
}
/**
 * 表格合计行
 * @param str 金额
 */
export function tableSummaries(param: { columns: any; data: any }):Array<string | number> {
    const { columns, data } = param
    const sums:Array<string | number> = []
    columns.forEach((column: { property: string | number }, index:number) => {
        if (index === 0) {
            sums[index] = '合计'
            return
        }
        const values = data.map((item: { [x: string]: any }) => Number(item[column.property]))
        if (!values.every((value: number) => isNaN(value))) {
            sums[index] = values.reduce((prev: number, curr: number) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)
            const sum = sums[index]
            if(typeof sum === 'number') {
                sums[index] = format(sum.toFixed(2))
            }
        } else {
            sums[index] = 'N/A'
        }
    })

    return sums
}

export function isInput(el: HTMLElement): boolean {
    return el.nodeName.toLocaleLowerCase() === 'input' 
}
export function isTextarea(el: HTMLElement): boolean {
    return el.nodeName.toLocaleLowerCase() === 'textarea' 
}

/**
 * localStorage设置有效期
 * @param name localStorage设置名称
 * @param data 数据对象
 * @param pExpires 有效期(默认100年)
 */
export function setLocal(name:string, data:IObject<any>, pExpires = 1000 * 60 * 60 * 24 * 365 * 100):void {
    const d = data as ILocalStore
    d.startTime = Date.now()
    d.expires = pExpires
    localStorage.setItem(name, JSON.stringify(data))
}
/**
 * 判断localStorage有效期是否失效
 * @param name localStorage设置名称
 */
export async function useLocal(name: string):Promise<ILocalStore> {
    return new Promise((resolve, reject) => {
        const local = getLocal<ILocalStore>(name)
        if(local.startTime + local.expires < Date.now()) reject(`${name}已超过有效期`)
        resolve(local)
    })
}
/**
 * 获取localStorage对象并转成对应的类型
 * @param name localStorage设置名称
 */
export function getLocal<T>(name:string):T {
    const l = localStorage.getItem(name)
    const local = JSON.parse(l !== null ? l : '{}') as unknown as T
    return local
}