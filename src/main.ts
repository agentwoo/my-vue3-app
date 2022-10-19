import { createApp, useAttrs } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/index'
//引入全局事件总线mitt
import mitt from 'mitt'

//引入Card组件,全局组件
import Card from './components/day02/Card/index.vue'


//初始化mitt
const Miit = mitt()

const app = createApp(App)

app.component('Card', Card)

app.use(router)

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
