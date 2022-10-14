<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
import ProvideB from '../ProvideB/index.vue'

const color = inject<Ref<string>>('color')
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
