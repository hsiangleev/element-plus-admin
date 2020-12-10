/**
 * 函数节流
 * @param time 间隔时间
 */
export default function (time = 500):()=>void {
    let timer = null
    let firstTime = true
    return ()=>{
        return new Promise(resolve=>{
            if(firstTime){
                resolve()
                return firstTime = false
            }
            if(timer) return false
            timer = setTimeout(()=>{
                clearTimeout(timer)
                timer = null
                resolve()
            }, time)
        })
    }
}