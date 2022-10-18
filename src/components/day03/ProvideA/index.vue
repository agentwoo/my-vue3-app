<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
import ProvideB from '../ProvideB/index.vue'

//为什么要用Ref包裹
// const color = inject<Ref<string>>('color')
const color = inject<string>('color', 'green')
</script>

<template>
    <div>AAAAA</div>
    <div class="box"></div>
    <ProvideB></ProvideB>
</template>

<style scoped lang="scss">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>
