
import { h, defineComponent, Component, resolveComponent } from 'vue'

export function UseElIcon(icon: string, color = 'inherit', size?: number | string): Component {
    return defineComponent({
        name: 'UseElIcon',
        render() {
            // return h(resolveComponent(icon))
            return h(resolveComponent('el-icon'), {
                color: color,
                size: size || ''
            }, () => [
                h(resolveComponent(icon))
            ])
        }
    })
}