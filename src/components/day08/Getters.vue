<script setup lang="ts">
import { useTestFourStore } from '../../store'
const Test = useTestFourStore()
const change = () => {
    Test.setName()
}
</script>
<template>
    <div class="A">
        <div class="B">
            <h3>getters</h3>
            <p>获取age:{{Test.getUserAge}}</p>
            <hr>
            <p>action-name:{{Test.name}}</p>
            <hr>
            <!-- 直接调用store中getters的newName -->
            <p>getters:{{Test.newName}}</p>
            <hr>
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
