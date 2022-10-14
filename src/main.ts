import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入Card组件,全局组件
import Card from './components/day02/Card/index.vue'


createApp(App).component('Card', Card).mount('#app')
