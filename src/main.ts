import { createApp } from 'vue'
import App from '@src/App.vue'
import ElementPlus from 'element-plus'
import direct from '@src/directive/action'
import router from '@src/router/index'
import { store } from '@src/store/index'
import '@src/mock/index'
import '@src/permission'

import 'element-plus/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import '@src/index.css'

const app = createApp(App)
direct(app)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')