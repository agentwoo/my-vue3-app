<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

//加载异步组件
const A = defineAsyncComponent(() => import('./A.vue'))

</script>
<template>
    <div class="content">
        <Suspense>
            <template #default>
                <A></A>
            </template>
            <template #fallback>
                <div>
                    loading.....
                </div>
            </template>
        </Suspense>
    </div>
</template>
<style scoped lang="scss">

</style>
