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
            const { arg } = binding
            if(arg === 'money'){
                const elem = el.firstElementChild
                nextTick(()=>elem.value = format(elem.value))
                elem.addEventListener('focus', ()=>elem.value = unformat(elem.value), true)
                elem.addEventListener('blur', ()=>elem.value = format(elem.value), true)
            }
        }
    })
}