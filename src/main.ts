import { createApp, useAttrs } from 'vue'
import './style/index.css'
import App from './App.vue'
import { router } from './router/index'
//引入全局事件总线mitt
import mitt from 'mitt'
//引入pinia
import { createPinia } from 'pinia'

//引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入Card组件,全局组件
import Card from './components/day02/Card/index.vue'

const app = createApp(App)

//初始化mitt
const Miit = mitt()

const store = createPinia()

app.component('Card', Card)

app.use(router)

app.use(store)

app.use(ElementPlus)

//声明并导出Mit
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Miit
    }
}

//配置全局事件总线
app.config.globalProperties.$Bus = Miit

app.mount('#app')

// createApp(App).component('Card', Card).use(router).mount('#app')
