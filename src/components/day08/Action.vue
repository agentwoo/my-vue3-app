<script setup lang="ts">
import { useTestTwoStore, useTestThreeStore } from '../../store'
const Test = useTestTwoStore()
const change = () => {
    Test.setUser()
}

const TestAsync = useTestThreeStore()
const change1 = () => {
    TestAsync.setUser()
}
</script>
<template>
    <div class="A">
        <div class="B">
            <h3>action同步调用</h3>
            <p>action-user:{{Test.user}}</p>
            <hr>
            <p>action-name:{{Test.name}}</p>
            <hr>
            <p>getters:</p>
            <hr>
            <button @click="change">change</button>
        </div>

        <div class="B">
            <h3>action异步调用</h3>
            <p>TestAsync-user:{{TestAsync.user}}</p>
            <hr>
            <p>TestAsync-name:{{TestAsync.name}}</p>
            <hr>
            <p>getters:</p>
            <hr>
            <button @click="change1">change</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.A {
    display: flex;
    justify-content: space-around;

    .B {
        height: 300px;
        width: 400px;
        border: 3px solid gray;
    }
}
</style>
