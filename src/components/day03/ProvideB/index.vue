<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
const color = inject<Ref<string>>('color')
</script>

<template>
    <div>BBBBBBBB</div>
    <div class="box"></div>
</template>

<style scoped lang="scss">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>
