<script setup lang='ts'>
//学习keep-alive
import { ref, reactive } from 'vue'
import A from './A/index.vue'
import B from './B/index.vue'

const flag = ref<boolean>(true)

</script>
<template>
    <button @click="flag=!flag">切换组件</button>
    <!-- :include指定包含缓存组件,:exclude指定不包含缓存组件 -->
    <keep-alive :include="['A']">
        <A v-if="flag"></A>
        <B v-else></B>
    </keep-alive>
</template>
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}
</style>
