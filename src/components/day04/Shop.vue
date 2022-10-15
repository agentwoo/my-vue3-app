<script setup lang="ts">
//路由query传参

import { data } from './list.json'

import { useRouter } from 'vue-router'

// import { router } from '../../router';
const router = useRouter()

type Item = {
    name: string,
    price: number,
    id: number
}

//query传参
// const toDetail = (item: Item) => {
//     router.push({
//         path: './detail',
//         //query传的参数应为对象，此处item已经是对象
//         query: item
//     })
// }


// param传参
const toDetail = (item: Item) => {
    router.push({
        name: 'Detail',
        params: item
    })
}

</script>
<template>
    <div>列表页</div>
    <table cellspacing="0" class="table" border="1">
        <thead>
            <tr>
                <th>类目</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <th>{{item.name}}</th>
                <th>{{item.price}}</th>
                <th>
                    <button @click="toDetail(item)">详情</button>
                </th>
            </tr>
        </tbody>
    </table>
</template>
<style scoped lang="scss">
table {
    width: 500px;
}
</style>
