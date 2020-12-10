import { App } from 'vue'
import router from '@src/router/index'
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
}