<script setup lang="ts">
// computed-购物车案例
import { computed, ref, reactive } from 'vue'


// const arr: Array<string> = ['a', 'b', 'c']
// arr.splice(1, 0, 'iii')
// const arr2: (number)[] = [1, 2, 3]


// 学习computed
// let firtName = ref('')
// let lastName = ref('')
// const name = computed(() => {
//     // return firtName.value + lastName.value
//     return `${firtName.value}${lastName.value}`
// })

// const name = computed({
//     get() {
//         return firtName.value + lastName.value
//     },
//     set() {
//         firtName.value + lastName.value
//     }
// })





// 购物车
type shop = {
    name: string,
    num: number,
    price: number
}
const data = reactive<shop[]>([
    {
        name: 'hhh',
        num: 2,
        price: 100
    },
    {
        name: 'jjj',
        num: 2,
        price: 200
    },
    {
        name: 'kkk',
        num: 2,
        price: 300
    }
])
let totalPrice$ = ref(0)
const addAndsub = (item: shop, type: boolean): void => {
    if (item.num < 99 && type) {
        item.num++
    }
    if (item.num > 1 && !type) {
        item.num--
    }
    // totalPrice()
}
const del = (index: number) => {
    data.splice(index, 1)
    // totalPrice()
}

// 函数实现
// const totalPrice = () => {
//     totalPrice$.value = data.reduce((prev, next) => {
//         return prev + (next.num * next.price)
//     }, 0)
// }
// totalPrice()//初始时调用

// 用计算属性实现
totalPrice$ = computed<number>(() => {
    return data.reduce((prev, next) => {
        return prev + (next.num * next.price)
    }, 0)
})

</script>

<template>


    <!-- <div>
        <div v-for="item in arr" key="item">
            <div>{{item}}</div>
        </div>
    </div> -->


    <!-- 姓名 -->
    <!-- <input type="text" v-model="firtName"><br>
    <input type="text" v-model="lastName">
    <div>
        全名：{{name}}
    </div> -->



    <!-- 购物车 -->
    <div>
        <table border style="width:800px" cellspacing="0px" cellpadding="0px">
            <thead>
                <th>名称</th>
                <th>数量</th>
                <th>单价</th>
                <th>价格</th>
                <th>操作</th>
            </thead>
            <tbody v-for="(item,index) in data" :key="index">
                <td>{{item.name}}</td>
                <td>
                    <button @click="addAndsub(item,true)">+</button>
                    {{item.num}}
                    <button @click="addAndsub(item,false)">-</button>
                </td>
                <td>{{item.price}}</td>
                <td>{{item.price * item.num}}</td>
                <td><button @click="del(index)">删除</button></td>
            </tbody>
            <tfoot>
                <td colspan="4"></td>
                <td>总价：{{totalPrice$}}</td>
            </tfoot>
        </table>
    </div>


</template>

<style lang="sass">

</style>
