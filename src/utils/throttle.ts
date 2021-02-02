/**
 * 函数节流
 * @param time 间隔时间
 */
export default function(time = 500):()=>Promise<void> {
    let timer:NodeJS.Timeout | null = null
    let firstTime = true
    return () => {
        return new Promise(resolve => {
            if(firstTime) {
                resolve()
                return firstTime = false
            }
            if(timer) return false
            timer = setTimeout(() => {
                if(timer) clearTimeout(timer)
                timer = null
                resolve()
            }, time)
        })
    }
}