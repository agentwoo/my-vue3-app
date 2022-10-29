<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import { getAuthorirty } from '../../http/api'

type Tquery = {
    id: number,
    authority: string
}

// let id: number = 0
// let authorityIds: number[] = []

const route = useRoute()
const query: any = route.query

const data = reactive({
    id: query.id as number,
    authorityIds: query.authority.split(',').map((v: any) => +v) as number[]
})

type Tlist = {
    name: string,
    roleId: number,
    viewRole?: string,
    roleList?: Tlist[]
}
const list = ref<Tlist[]>([])

onMounted(() => {
    getAuthorirty().then(res => {
        list.value = res.data
    })
})

let treeRef = ref<any>()
const onSubmit = () => {
    console.log(treeRef.value.getCheckedKeys());
    alert("http提交")

}

const router = useRouter()
const back = () => {
    router.back()
}
</script>

<template>
    <el-button type="primary" size="small" @click="onSubmit()">
        确认修改
    </el-button>
    <el-button type="primary" size="small" @click="back()">
        返回
    </el-button>
    <el-tree :data="list" show-checkbox node-key="roleId" :default-checked-keys="data.authorityIds"
        :props="{ children: 'roleList', label: 'name' }" check-strictly ref="treeRef" />
</template>

<style scoped lang="scss">

</style>
