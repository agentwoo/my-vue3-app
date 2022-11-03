<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { getRoleList } from '../../http/api'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

type Tlist = {
    roleName: string,
    roleId: number,
    authority: number[]
}
const list = ref<Tlist[]>([])
// const listData = ref<Tlist[]>([])

//全局挂载
onMounted(() => {
    getRoleList().then(res => {
        list.value = res.data
        // listData.value = res.data
    })
})

//更改权限路由跳转
const router = useRouter()
const authorityChange = (row: Tlist) => {
    router.push({
        // path: '/home/authority',
        // path: 'authority',
        name: 'AuthorityView',
        query: {
            id: row.roleId,
            authority: row.authority.join(',')
        }
    })
}


//添加角色
const addRole = () => {
    // isAdd.value = true
    ElMessageBox.prompt('请输入角色名', '添加', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
    })
        .then(({ value }) => {
            if (value) {
                list.value.push({
                    roleName: value,
                    roleId: list.value.length + 1,
                    authority: []
                })
            }
            ElMessage({
                type: 'success',
                message: `新增成功`,
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消',
            })
        })
}



// 查询
// type TselectData = {
//     roleName: string,
//     roleId: number
// }
// const selectData = ref<TselectData>({
//     roleName: '',
//     roleId: 0
// })
// const onSubmit = () => {
// }

//权限更改


// 删除角色
const delRole = (row: Tlist) => {
    let listIndex = list.value.findIndex((v) => v.roleId === row.roleId)
    list.value.splice(listIndex, 1)
}

//修改角色名称
const updaRoleName = (row: Tlist) => {
    ElMessageBox.prompt('请修改角色名', '修改', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
    })
        .then(({ value }) => {
            row.roleName = value
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

</script>
<template>
    <div class="select-box">
        <!-- <el-form :inline="true" :model="selectData" class="demo-form-inline">
            <el-form-item label="角色">
                <el-select v-model="selectData.roleName" class="m-2" placeholder="请选择">
                    <el-option label="全部" :value="0" />
                    <el-option v-for="item in listData" :key="item.roleId" :label="item.roleName"
                        :value="item.roleId" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form> -->
        <el-button type="primary" @click="addRole">
            添加角色
        </el-button>
    </div>
    <el-table :data="list" style="width: 100%" border>
        <el-table-column prop="roleId" label="ID" width="180" />
        <el-table-column prop="roleName" label="角色" width="180" />
        <el-table-column prop="authority" label="操作">
            <template #default="scope">
                <el-button type="text" size="small" @click="authorityChange(scope.row)">
                    编辑权限
                </el-button>
                <el-button type="text" size="small" @click="delRole(scope.row)">
                    删除
                </el-button>
                <el-button type="text" size="small" @click="updaRoleName(scope.row)">
                    修改名称
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style scoped lang="scss">
.select-box {
    margin-bottom: 20px;
}
</style>
