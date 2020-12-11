import { createApp } from 'vue'
import App from '/@/App.vue'
import ElementPlus from 'element-plus'
import direct from '/@/directive/action'
import router from '/@/router/index'
import { store } from '/@/store/index'
import '/@/mock/index'
import '/@/permission'

import 'element-plus/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import '/@/index.css'

const app = createApp(App)
direct(app)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')