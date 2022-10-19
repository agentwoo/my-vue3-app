<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'

const instance = getCurrentInstance()

let str2 = ref<string>('123')

instance?.proxy?.$Bus.on('on-click', (params) => {
    // console.log(params, "=======>这是B组件");
    str2.value = params as string
})
</script>
<template>
    <div>我是B</div>
    {{str2}}
</template>
<style scoped lang="scss">

</style>
