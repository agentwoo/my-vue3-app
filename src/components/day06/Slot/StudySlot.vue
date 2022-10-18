<script setup lang="ts">
import S from './S.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const toDSlot = () => {
    router.push({
        path: '/slot/dslot'
    })
}
</script>
<template>
    <S>
        <!-- (v-slot:)可以简写为# -->
        <!-- <template #header>
            我是默认插槽--header
        </template> -->

        <template v-slot:header>
            <h2>HelloWorld</h2>
            我是默认插槽--header
        </template>

        <template v-slot:main>
            我是具名插槽--main
            <div>123</div>
            <input type="text" value="HelloWorld">
        </template>

        <!-- 此处可以用#default代替(v-slot) -->
        <!-- <template #default="{data,index}">
            <div>{{data.name}}--{{data.age}}--{{index}}</div>
        </template> -->

        <template v-slot="{data,index}">
            <div>{{data.name}}--{{data.age}}--{{index}}</div>
        </template>

    </S>

    <button @click="toDSlot()">动态插槽</button>
    <!-- <router-link to="/solt/dslot">132</router-link> -->
    <hr>
    <hr>
    <router-view></router-view>
</template>
<style scoped lang="scss">

</style>
