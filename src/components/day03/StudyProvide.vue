<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import ProvideA from './ProvideA/index.vue'

const colorVal = ref<string>('red')
provide('color', colorVal)
</script>

<template>
    <div>最高级</div>
    <label>
        <input v-model="colorVal" value="red" name="color" type="radio">
        红色
    </label>
    <label>
        <input v-model="colorVal" value="yellow" name="color" type="radio">
        黄色
    </label>
    <label>
        <input v-model="colorVal" value="blue" name="color" type="radio">
        蓝色
    </label>
    <div class="box"></div>
    <ProvideA></ProvideA>
</template>

<style scoped lang="scss">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(colorVal);
}
</style>
