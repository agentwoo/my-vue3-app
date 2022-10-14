<script setup lang="ts">
import { reactive, markRaw } from 'vue';
import Card from '../../../day02/Card/index.vue';
//内容区域


//引入动态组件
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
    name: string
    comName: any
}
const data = reactive<Tabs[]>([
    {
        name: "我是A组件",
        //使用markRaw（）跳过proxy的代理
        comName: markRaw(A)
    },
    {
        name: "我是B组件",
        comName: markRaw(B)
    },
    {
        name: "我是C组件",
        comName: markRaw(C)
    }
])

type Com = Pick<Tabs, 'comName'>
let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom = (item: Tabs) => {
    current.comName = item.comName
}

</script>
<template>

    <!-- <div class="content">
        <div v-for="item in 50" :key="item" class="content-items">
            <Card :content="`我是第${item}个`"></Card>
        </div>
    </div> -->



    <div class="content1">
        <div class="tab">
            <div v-for="item in data" :key="item.name" @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName"></component>
    </div>

</template>

<style  scoped>
/* .content {
    height: 600px;
    width: 800px;
    margin: 5px;
    overflow: auto;
}

.content-items {
    margin: 10px;
} */

.content1 {
    height: 600px;
    width: 800px;
    margin: 5px;
    overflow: auto;
}

.tab div {
    border: 1px solid gray;
    margin: 5px;
}
</style>
