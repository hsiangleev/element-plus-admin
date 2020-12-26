import {  } from 'element-plus'
/**
 * 睡眠函数
 * @param time 
 */
export async function sleep (time:number):Promise<void> {
    await new Promise(resolve=>{
        setTimeout(() => resolve, time)
    })
}
/**
 * 金额格式化
 * @param num 金额
 * @param symbol 金额前面修饰符号，如$,￥
 */
export function format (num:number|string, symbol = '￥'):string{
    if(Number.isNaN(Number(num))) return `${symbol}0.00`
    return symbol + (Number(num).toFixed(2))
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
/**
 * 取消金额格式化
 * @param str 金额
 */
export function unformat (str:string):number|string{
    const s = str.substr(1).replace(/\,/g, '')
    return Number.isNaN(Number(s)) || Number(s) === 0 ? '' : Number(s)
}
/**
 * 表格合计行
 * @param str 金额
 */
export function tableSummaries (param):Array<unknown>{
    const { columns, data } = param
    const sums = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = '总价'
            return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)
            sums[index] = format(sums[index].toFixed(2))
        } else {
            sums[index] = 'N/A'
        }
    })

    return sums
}