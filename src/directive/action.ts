import { App, nextTick } from 'vue'
import { format, unformat } from '/@/utils/index'
import { checkPermission, IPermissionType } from '/@/utils/permission'
export default (app:App<Element>):void => {
    app.directive('action', {
        mounted(el, binding) {
            const value:Array<string> = typeof binding.value === 'string' ? [binding.value] : binding.value
            const arg:IPermissionType = binding.arg === 'and' ? 'and' : 'or'
            if(!checkPermission(value, arg)) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    })
    app.directive('format', {
        mounted(el, binding) {
            const { arg, value } = binding
            if(arg === 'money') {
                const elem = el.firstElementChild
                nextTick(() => elem.value = format(elem.value))
                elem.addEventListener('focus', (event:MouseEvent) => {
                    if(!event.target) return
                    const target = event.target as HTMLInputElement
                    target.value = String(unformat(target.value))
                    value[0][value[1]] = target.value
                }, true)
                elem.addEventListener('blur', (event: MouseEvent) => {
                    if(!event.target) return
                    const target = event.target as HTMLInputElement
                    const val = unformat(format(target.value))
                    value[0][value[1]] = val === '' ? 0 : val
                    nextTick(() => target.value = format(val))
                }, true)
            }
        }
    })
}