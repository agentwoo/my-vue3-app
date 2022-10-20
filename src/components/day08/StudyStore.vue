<script setup lang="ts">
import { useTestStore } from '../../store'

const Test = useTestStore()

//state第一种写法
const change1 = () => {
    Test.current++
    Test.name = Test.current % 2 == 1 ? '李四' : '张三'
}

//state第二种写法
const change2 = () => {
    Test.$patch({
        current: 888,
        name: 'jack'
    })
}

//state第三种写法--推荐使用
const change3 = () => {
    Test.$patch((state) => {
        state.current = 999
        state.name = '小鱼干'
    })
}

//state第四种，不常用--必须修改整个对象
const change4 = () => {
    Test.$state = {
        current: 255,
        name: 'Tom'
    }
}

//state借助action调用
const change5 = () => {
    // Test.setCurrent()

    //可以传参，同时在store中的action接收
    Test.setCurrent(456)
}


</script>
<template>
    <div>
        <h4>state的五种写法</h4>
        pinia:{{Test.current}}--{{Test.name}}<br>
        <button @click="change1">change1</button>
        <button @click="change2">change2</button>
        <button @click="change3">change3</button>
        <button @click="change4">change4</button>
        <button @click="change5">change5</button>
    </div>
    <hr>
    <RouterLink to="/pinia/jiegou" style="margin-right:10px">解构</RouterLink>
    <RouterLink to="/pinia/action" style="margin-right:10px">Action</RouterLink>
    <RouterLink to="/pinia/getters" style="margin-right:10px">Getters</RouterLink>
    <RouterLink to="/pinia/api">Api</RouterLink>
    <hr>
    <RouterView></RouterView>
</template>
<style scoped lang="scss">
button {
    margin-right: 10px;
}
</style>
