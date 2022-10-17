<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toChld1 = () => {
    router.push({
        path: '/fone/son1/child1'
    })
}
</script>
<template>
    我是Son1
    <br>
    <!-- <router-link to="/fone/son1/child1">child1</router-link> -->
    <button @click="toChld1()">child1</button>
    <hr>
    <hr>
    <router-view></router-view>
</template>
<style scoped lang="scss">

</style>
