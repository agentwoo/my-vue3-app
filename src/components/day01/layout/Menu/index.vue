<script setup lang="ts">
//菜单
import { reactive, ref } from 'vue'
import Tree from '../../../day02/Tree/index.vue'



type Props = {
    title?: string,
    arr?: number[]
    //加？父组件可传可不传
}
defineProps<Props>()


type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}

const data = reactive<TreeList[]>([
    {
        name: 'no.1-1',
        children: [
            {
                name: 'no.1-1-1',
                children: [
                    {
                        name: 'no.1-1-1-1'
                    }
                ]
            }
        ]
    },
    {
        name: 'no.2-1',
        children: [
            {
                name: 'no.2-1-1'
            }
        ]
    },
    {
        name: 'no.3-1'
    },
    {
        name: 'no.4-1'
    }
])


//传给父组件
const list = reactive<number[]>([6, 6, 6])
const emit = defineEmits(['on-click'])
const clickSend = () => {
    emit('on-click', list)
}

// const flag = ref(false)
// //向外暴露
// defineExpose({
//     list,
//     flag
// })

const getItem = (item: TreeList) => {
    console.log(item)
}
</script>
<template>
    <div class="menu">

        <div>{{title}}</div>
        <!-- <div>{{arr}}</div> -->

        <button @click="clickSend">点我发信息</button>

        <Tree @on-click="getItem" :data="data"></Tree>
    </div>
</template>

<style scoped>
.menu {

    border-right: 1px solid gray;
}
</style>
