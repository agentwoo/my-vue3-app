<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

let str = 'mitt'

const emit = () => {
    instance?.proxy?.$Bus.emit('on-click', str)
}
</script>
<template>
    <div>我是A</div>
    <button @click="emit">emit</button>
</template>
<style scoped lang="scss">

</style>
