<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// import HelloWorld from './components/HelloWorld.vue'
// import studyWatchEffect from './components/day01/studyWatchEffect.vue'
// import layout from './components/day01/layout/index.vue'
// import StudyKeepAlive from './components/day03/StudyKeepAlive.vue'
// import StudyProvide from './components/day03/StudyProvide.vue'

// const msg = "{{123}}"

import { useRouter } from 'vue-router'

const router = useRouter()
const toPage = (url: string) => {
    // 字符串
    // router.push(url)

    //对象
    // router.push({
    //     path: url
    // })

    // router.replace({
    //     path: url
    // })

    //命名式
    router.push({
        name: url
    })

    // router.replace({
    //     name: url
    // })
}


const next = () => {
    router.go(1)
}
const back = () => {
    router.back()
}

const toF = (url: string) => {
    router.push({
        name: url
    })
}

const toFOne = (url: string) => {
    router.push({
        name: url
    })
}

const toFamily = () => {
    router.push({
        path: '/tofamily'
    })
}

const toTeleport = () => {
    router.push({
        path: '/teleport'
    })
}

</script>

<template>
    <!-- <HelloWorld :msg="123" /> -->
    <!-- <HelloWorld msg="123" />
    <HelloWorld msg="'123'" />
    <HelloWorld :msg="'123'" />
    <HelloWorld msg="{{123}}" />
    <div>hello,{{123}}</div>
    <div>hello,{{msg}}</div> -->

    <!-- <layout></layout> -->
    <!-- <StudyKeepAlive></StudyKeepAlive> -->
    <!-- <StudyProvide></StudyProvide> -->



    <!-- 默认路由跳转 -->
    <!-- <router-link to="/">login</router-link><br>
    <router-link to="/register">register</router-link> -->

    <!-- 历史记录-replace -->
    <!-- <router-link replace to="/">login</router-link><br>
    <router-link replace to="/register">register</router-link> -->

    <!-- 组件命名路由跳转 字符串-对象式-->
    <!-- <router-link :to="{name:'Login'}">login</router-link><br>
    <router-link :to="{name:'Register'}">register</router-link> -->

    <!-- 编程式路由跳转-url -->
    <!-- <button @click="toPage('/')">Login</button>
    <button @click="toPage('/Register')" style="margin-left: 10px;">Register</button> -->

    <!-- 编程式路由跳转-命名式 -->
    <button @click="toPage('Shop')">Shop</button>
    <button @click="toPage('Register')" style="margin-left: 10px;">Register</button>

    <button @click="next()" style="margin-left: 10px;">next</button>
    <button @click="back()" style="margin-left: 10px;">back</button>

    <button @click="toF('F')" style="margin-left: 10px;">test</button>

    <button @click="toFOne('FOne')" style="margin-left: 10px;">嵌套路由</button>
    <button @click="toFamily()" style="margin-left: 10px;">To全家桶</button>
    <button @click="toTeleport()">Teleport</button>
    <hr>
    <router-view></router-view>


</template>

<style scoped>

</style>
