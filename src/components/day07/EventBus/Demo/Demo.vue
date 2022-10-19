<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import { ref } from 'vue'

let Flag = ref<boolean>(true)

const getItem = (params: boolean) => {
    Flag.value = params
    // console.log(params);
}


</script>
<template>
    <A @on-click="getItem"></A>
    <div>我是父组件的{{Flag}}</div>
    <B :flag="Flag"></B>
</template>
<style scoped lang="scss">

</style>
