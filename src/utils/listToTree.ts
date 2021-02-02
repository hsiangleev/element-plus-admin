import { IMenubarList } from '/@/type/store/layout'
/**
 * list结构转tree
 * @param data list原始数据
 * @param pid 最外层pid
 */
export function listToTree(data:Array<IMenubarList>, pid: string | number = 1, isChildNull = false):Array<IMenubarList> {
    const d:Array<IMenubarList> = []
    data.forEach(val => {
        if(val.parentId == pid) {
            const list = listToTree(data, val.id, isChildNull)
            const obj:IMenubarList = { ...val }
            if(!isChildNull || list.length !== 0) {
                obj.children = list
            }
            d.push(obj)
        }
    })
    return d
}