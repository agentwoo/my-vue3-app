<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<template>
    <div class="dialog">
        <header class="header">
            <div>我是弹框</div>
        </header>
        <main class="main">
            我是内容
        </main>
        <footer class="footer">
            <button style="margin-right:10px">取消</button>
            <button>确认</button>
        </footer>
    </div>
</template>
<style scoped lang="scss">
.dialog {
    width: 300px;
    height: 300px;
    background: pink;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
}

.header {
    display: felx;
    color: gray;
    border-bottom: 1px solid gray;
    padding: 10px;
    justify-content: space-between;
}

.main {
    flex: 1;
    color: gray;
    padding: 10px;
}

.footer {
    border-top: 1px solid gray;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
