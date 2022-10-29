<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { getList } from '../../http/api';

type TslectData = {
    title: string,
    body: string,
    page: number,
    count: number
}
//选取查询数据
const selectData = ref<TslectData>({
    title: '',
    body: '',
    page: 0,
    count: 0
})
// const test = ref<TslectData>()

type Tlist = {
    userId: number,
    id: number,
    title: string,
    body: string
}
//展示数据
let list = ref<[Tlist][]>([])

//ref与reactive区别
// let obj = reactive({ name: 'tes1' })
// obj = { name: 'test2' }

// let obj2 = ref({ name: 'test1' })
// obj2.value = { name: 'test2' }

// obj2 = {
//     value: { name: 'test1' }
// }

let dataList = ref<Tlist[]>([])//用于存储数据源

onMounted(() => {
    getList({ page: selectData.value.page }).then(res => {
        // console.log(res.data);
        selectData.value.count = res.data.length
        dataList.value = res.data
        sliceList(res.data)
    })
})

//截取每页展示的数据量
const sliceList = (arr: Tlist[]) => {
    list.value = []
    for (let index = 0; index < arr.length; index += 10) {
        let newList: any = arr.slice(index, index + 10)
        list.value.push(newList)
    }
}

//获取分页页码
const currentChange = (page: number) => {
    selectData.value.page = page - 1
    // console.log(page);
}

//查询
const onSubmit = () => {
    // console.log(selectData.value.title);
    // 第一种写法
    // let arr: Tlist[] = []//用来存放过滤后的数据
    // if (selectData.value.title || selectData.value.body) {
    //     if (selectData.value.title) {
    //         arr = dataList.value.filter(v => v.title.indexOf(selectData.value.title) != -1)
    //     }
    //     if (selectData.value.body) {
    //         arr = (selectData.value.title ? arr : dataList.value).filter(v => v.body.indexOf(selectData.value.body) != -1)
    //     }
    // }
    // else {
    //     arr = dataList.value
    // }
    // console.log(arr);

    // 第二种写法
    let arr: Tlist[] = dataList.value
    if (selectData.value.title) {
        arr = dataList.value.filter(v => v.title.indexOf(selectData.value.title) != -1)
    }
    if (selectData.value.body) {
        arr = (selectData.value.title ? arr : dataList.value).filter(v => v.body.indexOf(selectData.value.body) != -1)
    }


    selectData.value.count = arr.length
    sliceList(arr)
}

</script>
<template>
    <div class="select-box">
        <el-form :inline="true" :model="selectData">
            <el-form-item label="标题">
                <el-input v-model="selectData.title" placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item label="详情">
                <el-input v-model="selectData.body" placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="list[selectData.page]" style="width: 100%" border>
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="body" label="详情" />
    </el-table>
    <el-pagination layout="prev, pager, next" :total="selectData.count" @current-change="currentChange" />
</template>
<style scoped lang="scss">

</style>
