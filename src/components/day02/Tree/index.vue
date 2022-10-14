<script setup lang="ts">
//递归组件
//调用自己
import TreeItem from './index.vue'


type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}
type Props = {
    data: TreeList[]
}
defineProps<Props>()


const emit = defineEmits(['on-click'])
const sendItem = (item: TreeList) => {
    emit('on-click', item)
}

</script>

<!-- 递归组件第二种写法 -->
<!-- <script lang="ts">
export default {
    name: 'TreeItem'
}
</script> -->

<template>
    <div style="margin-left:40px">
        <div @click.stop="sendItem(item)" v-for="(item,index) in data" :key="index">
            {{item.name}}
            <!-- 递归第一种写法 -->
            <TreeItem @on-click="sendItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
        </div>
    </div>
</template>

<style>

</style>
