<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { getRoleList, getUserList } from '../../http/api';

//查询
type TslectData = {
    nikeName: string,
    role: number
}
const selectData = ref<TslectData>({
    nikeName: '',
    role: 0
})
//角色列表
type TRoleList = {
    roleName: string,
    roleId: number,
    authorty: number[]
}
// let roleList: TRoleList[] = []
let roleList = ref<TRoleList[]>([])


//用户列表
type Trole = {
    role: number,
    roleName: string
}
type Tlist = {
    id: number,
    nikeName: string,
    userName: string,
    role: Trole[]
}

// let list = ref<Tlist>()
// let list:[Tlist][]=[]
let list = ref<[Tlist][]>([])
let listData = ref<[Tlist][]>([])//存储数据源

//挂载
onMounted(() => {
    getUserList().then(res => {
        list.value = res.data
        listData.value = res.data
    })
    getRoleList().then(res => {
        // roleList = res.data
        roleList.value = res.data
    })
})

//姓名、权限查询
const onSubmit = () => {
    // let arr: [Tlist][] = []
    // if (selectData.value.nikeName || selectData.value.role) {
    //     if (selectData.value.nikeName) {
    //         arr = listData.value.filter((v: any) => v.nikeName.indexOf(selectData.value.nikeName) != -1)
    //     }
    //     if (selectData.value.role) {
    //         arr = (selectData.value.nikeName ? arr : listData.value).filter((v: any) => v.role.find((i: any) => i.role === selectData.value.role))
    //     }
    // }
    // else {
    //     arr = listData.value
    // }

    //第二种写法
    let arr: [Tlist][] = listData.value
    if (selectData.value.nikeName) {
        arr = listData.value.filter((v: any) => v.nikeName.indexOf(selectData.value.nikeName) != -1)
    }
    if (selectData.value.role) {
        arr = (selectData.value.nikeName ? arr : listData.value).filter((v: any) => v.role.find((i: any) => i.role === selectData.value.role))
    }

    list.value = arr
}

//编辑
type Tactive = {
    id: number,
    nikeName: string,
    userName: string,
    role: number[]
}
let active = ref<Tactive>({
    id: 0,
    nikeName: '',
    userName: '',
    role: []
})
//编辑弹窗
let isShow = ref<boolean>(false)

const ediFun = (row: Tlist) => {
    active.value = {
        id: row.id,
        userName: row.userName,
        nikeName: row.nikeName,
        role: row.role.map((v: any) => v.role || v.roleId)
    }
    isShow.value = true
}

//确定弹窗
const userChange = () => {
    const obj: any = list.value.find((v: any) => v.id === active.value.id)
    obj.nikeName = active.value.nikeName
    obj.role = roleList.value.filter((v: any) => active.value.role.indexOf(v.roleId) !== -1)
    isShow.value = false
}

</script>
<template>
    <div class="select-box">
        <el-form :inline="true" :model="selectData">
            <el-form-item label="姓名">
                <el-input v-model="selectData.nikeName" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="selectData.role" class="m-2" placeholder="请选择">
                    <el-option label="全部" :value="0" />
                    <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName"
                        :value="item.roleId" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="list" style="width: 100%" border>
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="nikeName" label="姓名" width="180" />
        <el-table-column prop="role" label="角色">
            <template #default="scope">
                <el-button v-for="i in scope.row.role" :key="i.role" type="text" size="small">
                    {{ i.roleName }}
                </el-button>
            </template>
        </el-table-column>
        <el-table-column prop="role" label="操作">
            <template #default="scope">
                <el-button type="text" size="small" @click="ediFun(scope.row)">
                    编辑
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 编辑弹窗 -->
    <el-dialog v-model="isShow" title="权限更改">
        <el-form :model="active">
            <el-form-item label="姓名" label-width="50px">
                <el-input v-model="active.nikeName" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="角色" label-width="50px">
                <el-select v-model="active.role" placeholder="请选择角色" multiple>
                    <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName"
                        :value="item.roleId" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isShow = false">取消</el-button>
                <el-button type="primary" @click="userChange()">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style scoped lang="scss">

</style>
