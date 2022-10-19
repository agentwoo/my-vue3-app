<script setup lang="ts">
// 使用动态插槽时，需是具名插槽
import S from './S.vue'
import { ref } from 'vue'
let located = ref('main')
</script>
<template>
    <S>
        <!-- 原始写法 -->
        <template v-slot:[located]>
            <div>Where am i</div>
        </template>

        <!-- 简写 -->
        <!-- <template #[lacoted]>
            <div>Where am i</div>
        </template> -->
    </S>
</template>
<style scoped lang="scss">

</style>
