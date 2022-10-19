<script setup lang="ts">
import { ref, reactive } from 'vue'
import 'animate.css'
const list = reactive<number[]>([1, 2, 3, 4])
const add = () => {
    list.push(list.length + 1)
}
const pop = () => {
    list.pop()
}
</script>
<template>
    <div class='content'>
        <button @click="add">add</button>
        <button @click="pop" style="margin-left:10px">pop</button>

        <div class="wraps">
            <!-- tag作用是在外部包一层属性 -->
            <!-- <TransitionGroup tag="h2"> -->
            <TransitionGroup enter-active-class="animate__animated animate__backInLeft"
                leave-active-class="animate__animated animate__hinge" mode="out-in">
                <div class="items" v-for="item in list" :key="item">{{item}}</div>
            </TransitionGroup>
        </div>
    </div>
</template>
<style scoped lang="scss">
.wraps {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid gray;
}

.items {
    margin: 10px;
}
</style>
