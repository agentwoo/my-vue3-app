<script setup lang="ts">
//解构
import { useTestStore } from '../../store'
import { storeToRefs } from 'pinia'
const Test = useTestStore()


//pinia解构不具有响应式
// const { current, name } = Test

//使用storeToRefs包裹，使其变为响应式
const { current, name } = storeToRefs(Test)

const change = () => {
    Test.current++
    // current.value++
}

</script>
<template>
    <div class="A">
        <div class="B">
            <h3>states解构</h3>
            <div>originValue:{{Test.current}}--{{Test.name}}</div>
            <div>pinia:{{current}}--{{name}}</div>
            <button @click="change">change</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.A {
    display: flex;
    justify-content: center;

    .B {
        width: 400px;
        height: 300px;
        border: 3px solid gray;
    }
}
</style>
