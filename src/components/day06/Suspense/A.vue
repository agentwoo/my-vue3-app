<script setup lang="ts">
import { axios } from './server'

//data.json在public文件下
const list = await axios('./data.json')

</script>
<template>
    <div v-for="(item,index) in list">
        {{index}}--{{item.name}}---{{item.age}}
    </div>
</template>
<style scoped lang="scss">

</style>
