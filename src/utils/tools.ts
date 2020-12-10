
/**
 * 睡眠函数
 * @param time 
 */
export async function sleep (time:number):Promise<void> {
    await new Promise(resolve=>{
        setTimeout(() => resolve, time)
    })
}