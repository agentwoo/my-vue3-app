<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
//把内部变成响应式
// const color = inject<Ref<string>>('color')

//非响应式
let color = inject<string>('color', 'gray')
const change = () => {
    color = 'green'
}

</script>

<template>
    <div>BBBBBBBB</div>
    <div class="box"></div>
    <button @click="change()">点击</button>
</template>

<style scoped lang="scss">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>
