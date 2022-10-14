<script setup lang="ts">
//全局组件、局部组件、递归组件
//在main.ts中注册
type Props = {
    content?: string
}

defineProps<Props>()

</script>

<template>
    <div class="card">
        <div class="card-header">
            <div>主标题</div>
            <div>副标题</div>
        </div>
        <div class="card-content" v-if="content">
            {{content}}
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ccc
}

.card:hover {
    box-shadow: 0 0 10px #ccc;
}

.card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.card-content {
    padding: 10px;
}
</style>
