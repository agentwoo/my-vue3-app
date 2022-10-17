<script setup lang="ts">
import { ref, reactive, toRef, toRefs, toRaw, markRaw } from 'vue'


const child = { name: '张三', age: 3, gender: 'male' }
//toRef 只能修改响应式对象的值 非响应式视图无效
const age = toRef(child, 'age')
const change = () => {
    // child.age = 18
    // console.log(child)
    age.value = 19
    console.log(child)
}


//toRef
const kid = reactive({ name: '李四', age: 2, gender: 'male' })
const name = toRef(kid, 'name')
const change1 = () => {
    name.value = "王五"
    console.log(kid)
}
//使用场景,当函数需要接收一个参数时，将对象的属性取出来
// useDemo(toRef(kid, 'name'))


//toRefs
const goods = reactive({ food: '炸鸡', price: 18, star: 4 })
let { food, price, star } = toRefs(goods)
const change2 = () => {
    food.value = "汉堡",
        price.value = 20,
        star.value = 5,
        console.log(goods);
}


//toRaw从响应式数据中获取原始数据
const hobbies = reactive(['抽烟', '喝酒', '烫头'])
const change3 = () => {
    console.log(hobbies, toRaw(hobbies));

}


//markRaw,使用markRaw包裹之后，数据不会变成响应式数据
const obj = reactive({ like: 'eat' }) //先用reactive包裹在使用markRaw包裹，此时markRaw不起作用
// const obj = { like: 'eat' }
let obj2 = markRaw(obj)
let obj3 = reactive(obj2)
const change4 = () => {
    obj2.like = 'palyGame'
    console.log('obj2', obj2);
    console.log('obj3', obj3);


}


</script>

<template>
    <button @click="change">非响应式</button>
    <button @click="change1" style="margin-left:20px">toRef</button>
    <button @click="change2" style="margin-left:20px">toRefs</button>
    <button @click="change3" style="margin-left:20px">toRaw</button>
    <button @click="change4" style="margin-left:20px">markRaw</button>

    <hr>
    原始数据类型：
    非响应式：{{child}}
    <br>
    toRef:{{kid}}
    <br>
    toRefs:{{food}}-{{price}}-{{star}}
    <br>
    markRaw:{{obj2}}-{{obj3}}


</template>
<style scoped lang="scss">

</style>
