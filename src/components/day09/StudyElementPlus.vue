<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toA = () => {
    router.push({
        path: '/elementPlus/a'
    })
}
const toB = (url: string) => {
    router.push({
        name: url
    })
}
const toSlotCss = () => {
    router.push({
        path: '/elementPlus/slotCss'
    })
}

const toCssModule = () => {
    router.push({
        path: '/elementPlus/cssModule'
    })
}

const toTest = () => {
    router.push({
        path: '/elementPlus/test'
    })
}

</script>
<template>
    <button @click="toA">Example</button>
    <button @click="toB('B')">B</button>
    <button @click="toSlotCss">SlotCss</button>
    <button @click="toCssModule()">CssModule</button>
    <button @click="toTest">test</button>
    <hr>
    <RouterView></RouterView>
</template>
<style scoped lang="scss">
button {
    margin-left: 10px;
}
</style>
