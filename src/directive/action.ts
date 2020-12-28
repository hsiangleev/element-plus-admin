import { App, nextTick } from 'vue'
import router from '/@/router/index'
import { format, unformat } from '/@/utils/tools'
export default (app:App<Element>):void => {
    app.directive('action', {
        mounted(el, binding) {
            const arg:Array<string> = typeof binding.arg === 'string' ? [binding.arg] : binding.arg
            const currentRoute = router.currentRoute.value
            const roles:Array<string> = currentRoute.meta.permission || []
            const isShow = roles.some(v=>arg.includes(v))
            if(!isShow){
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    })
    app.directive('format', {
        mounted(el, binding) {
            const { arg, value } = binding
            if(arg === 'money'){
                const elem = el.firstElementChild
                nextTick(()=>elem.value = format(elem.value))
                elem.addEventListener('focus', (event)=>{
                    event.target.value = unformat(event.target.value)
                    value[0][value[1]] = event.target.value
                }, true)
                elem.addEventListener('blur', (event)=>{
                    const val = unformat(format(event.target.value))
                    value[0][value[1]] = val === '' ? 0 : val
                    nextTick(()=>event.target.value = format(val))
                }, true)
            }
        }
    })
}