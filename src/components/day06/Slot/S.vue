<script setup lang="ts">
import { reactive } from 'vue'

type child = {
    name: string,
    age: number
}

const children = reactive<child[]>([
    {
        name: '张三',
        age: 8
    },
    {
        name: '李四',
        age: 9
    },
    {
        name: '王五',
        age: 10
    }
])
</script>
<template>
    <div>
        <header class="header">
            <!-- 当父组件没有填充插槽内容是，显示123123 -->
            <slot name="header">123123</slot>
        </header>

        <main class="main">
            <slot name="main"></slot>
        </main>

        <footer class="footer">
            <!-- <div>我是作用域插槽</div> -->
            <div v-for="(item,index) in children">
                <slot :data="item" :index="index" name="footer"></slot>
            </div>
        </footer>
    </div>
</template>
<style scoped lang="scss">
.header {
    height: 150px;
    background: red;
    color: white;
}

.main {
    height: 150px;
    background: yellowgreen;
    color: white;
}

.footer {
    height: 150px;
    background: blueviolet;
    color: white;
}
</style>
