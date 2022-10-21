<script setup lang="ts">
//:deep()样式穿透
import { ElInput } from 'element-plus'
</script>
<template>
    <div class="bg">
        <el-input class="ipt"></el-input>
    </div>
</template>
<style scoped lang="scss">
.bg {
    background: greenyellow;
    height: 60vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .ipt {
        width: 30vw;

        :deep(.el-input__inner) {
            background: red;
        }
    }
}
</style>
