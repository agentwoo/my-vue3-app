<script setup lang="ts">
//v-model绑定组件
import S from './S.vue'
import { ref } from 'vue'

const isShow = ref<boolean>(true)
const text = ref<string>('HelloWorld')
const text2 = ref<string>('123')

</script>

<template>
    <h3>我是父组件</h3>
    <div>{{isShow}}</div>
    <div>{{text}}</div>
    <div>test:{{text2}}</div>
    <button @click="isShow = !isShow">开关</button>
    <hr>
    <S v-model="isShow" v-model:textValue="text" v-model:textValue2="text2"></S>
</template>

<style scoped lang="scss">

</style>
