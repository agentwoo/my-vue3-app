<script setup lang="ts">
// Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。
import { ref, reactive } from 'vue'
import A from './A.vue'
</script>
<template>
    <div class="parent">
        <h1>我是父级teleport</h1>
        <Teleport :disabled="true" to="body">
            <!-- 通过disabled的值，控制A组件是否会传送到body的位置 -->
            <A></A>
        </Teleport>
    </div>
</template>
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.parent {
    background: greenyellow;
    height: 50vh;
    position: relative;
}
</style>
