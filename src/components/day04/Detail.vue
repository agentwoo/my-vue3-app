<script setup lang="ts">
//详情页
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

console.log(JSON.stringify(route.params))
const back = () => {
    router.back()
}

</script>
<template>
    <div>
        <h3>详情页</h3>
    </div>
    <!-- <div>类目：{{route.query.name}}</div>
    <div>价格：{{route.query.price}}</div>
    <div>ID：{{route.query.id}}</div> -->

    <div>类目：{{route.params.name}}</div>
    <div>价格：{{route.params.price}}</div>
    <div>ID：{{route.params.id}}</div>

    <button @click="back">返回</button>
</template>
<style scoped lang="scss">
table {
    width: 500px;
}
</style>
