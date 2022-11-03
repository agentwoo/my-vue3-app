<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { getList } from '../../http/api';
import { ElMessage, ElMessageBox } from 'element-plus'

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



// 删除所选用户
const delOrder = (row: Tlist) => {
    // 删除
    let Lindex = list.value[selectData.value.page].findIndex(v => v.id === row.id)
    list.value[selectData.value.page].splice(Lindex, 1)

    // 变为一维数组
    let newList = list.value.reduce(function (a: any, b: any) {
        return a.concat(b)
    })

    // 修改列表总数
    selectData.value.count -= 1
    // 修改分页视图
    sliceList(newList)
}

// 修改用户信息
const ediOrderTitle = (row: Tlist) => {
    ElMessageBox.prompt('请修改标题', '修改', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
    })
        .then(({ value }) => {
            row.title = value.trim()
            ElMessage({
                type: 'success',
                message: '修改成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消',
            })
        })
}

// 修改
const ediOrderBody = (row: Tlist) => {
    let Lindex = list.value[selectData.value.page].findIndex(v => v.id === row.id)
    let obj: Tlist = {
        body: '1321323',
        id: 9999,
        title: "45465165131",
        userId: 1
    }
    let arr = list.value[selectData.value.page].splice(Lindex, 1, obj)
    console.log(arr);
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

        <el-table-column prop="id" label="删除" width="180">
            <template #default="scope">
                <el-button type="text" size="small" @click="delOrder(scope.row)">
                    删除
                </el-button>
            </template>
        </el-table-column>

        <el-table-column prop="" label="修改" width="180">
            <template #default="scope">
                <el-button type="text" size="small" @click="ediOrderTitle(scope.row)">
                    标题
                </el-button>
                <el-button type="text" size="small" @click="ediOrderBody(scope.row)">
                    修改
                </el-button>
            </template>
        </el-table-column>


    </el-table>
    <el-pagination layout="prev, pager, next" :total="selectData.count" @current-change="currentChange" />
</template>
<style scoped lang="scss">

</style>
