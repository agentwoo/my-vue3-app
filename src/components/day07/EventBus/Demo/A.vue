<script setup lang="ts">
import { ref, toRaw } from 'vue'

let flag = false
const emit = defineEmits(['on-click'])
const sendItem = () => {
    flag = !flag
    emit('on-click', flag)
}
</script>
<template>
    <div class="A">
        A
        <button @click="sendItem()">点击传值</button>
    </div>
</template>
<style scoped lang="scss">
.A {
    width: 200px;
    height: 200px;
    background: red;
    color: white;
}
</style>
