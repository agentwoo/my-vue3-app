<script setup lang="ts">
//布局
import { reactive, ref } from 'vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import Menu from './Menu/index.vue'

const list = reactive<number[]>([1, 2, 3])

const getList = (list: number[]) => {
    // console.log("我是子组件发送的信息====>", list)
    console.log(menus.value);
}

const menus = ref(null)
</script>
<template>
    <div class="layout">
        <Menu ref="menus" @on-click="getList" title="我是菜单栏" :arr="list"></Menu>
        <div class="layout-right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;
}

.layout-right {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
