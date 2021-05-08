import { createApp } from 'vue'
import App from '/@/App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import direct from '/@/directive/index'
import router from '/@/router/index'
import { store } from '/@/store/index'
import '/@/mock/index'
import '/@/permission'

import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'
import 'nprogress/nprogress.css'
import '/@/assets/css/index.css'


const app = createApp(App)
direct(app)
app.use(ElementPlus, { locale })
app.use(router)
app.use(store)
app.mount('#app')