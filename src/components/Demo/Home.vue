<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const list = router.getRoutes().filter(v => v.meta.isShow)


// console.log(router.getRoutes().length);
</script>
<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="4">
                    <img src="../../assets/pig.jpeg" alt="">
                </el-col>
                <el-col :span="16">
                    <h2>后台管理系统</h2>
                </el-col>
                <el-col :span="4">
                    <div class="btn-text">
                        <el-button type="primary" text>
                            张三
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="1" text-color="#fff"
                    router>
                    <el-menu-item :index="i.path" v-for="i in list" :key="i.path">
                        <!-- <el-icon>
                            <document />
                        </el-icon> -->
                        <span>{{ i.meta.title }}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>
<style scoped lang="scss">
.el-header {
    height: 80px;
    background: gray;

    img {
        height: 80px;
        border-radius: 50%;
    }

    h2 {
        color: white;
        text-align: center;
        height: 80px;
        line-height: 80px;
    }

    .btn-text {
        height: 80px;
        line-height: 80px;
        text-align: right;
    }
}

.el-aside {
    .el-menu {
        height: calc(100vh - 115px);
    }
}
</style>
