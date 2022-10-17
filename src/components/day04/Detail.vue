<script setup lang="ts">
//详情页
import { data } from './list.json'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// console.log(JSON.stringify(route.params))

const back = () => {
    router.back()
}


//需重新学习，find（）
const item = data.find(v => v.id === Number(route.params.id))
</script>
<template>
    <div>
        <h3>详情页</h3>
    </div>
    <!-- <div>类目：{{route.query.name}}</div>
    <div>价格：{{route.query.price}}</div>
    <div>ID：{{route.query.id}}</div> -->

    <div>类目：{{item?.name}}</div>
    <div>价格：{{item?.price}}</div>
    <div>ID：{{item?.id}}</div>

    <button @click="back">返回</button>
</template>
<style scoped lang="scss">
table {
    width: 500px;
}
</style>
