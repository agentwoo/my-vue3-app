<script setup lang="ts">
import { reactive, toRefs, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { login } from '../../http/api'
import { useRouter } from 'vue-router'

const router = useRouter()

type TLoginForm = {
    userName: string,
    passWord: string
}

const loginForm = ref<TLoginForm>({
    userName: '',
    passWord: ''
})

const rules = reactive({
    userName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 24, message: '账号长度需要在6-24之间', trigger: 'blur' },
    ],
    passWord: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 24, message: '密码长度需要在6-24之间', trigger: 'blur' },
    ]
})

const loginFormRef = ref<FormInstance>()

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            login(loginForm.value).then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                router.push('/home')
            })
            // alert('登录成功')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>

<template>
    <div class="login-box">
        <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" class="loginForm">
            <h2>后台管理系统</h2>
            <el-form-item label="账号:" prop="userName">
                <el-input v-model="loginForm.userName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码:" prop="passWord">
                <el-input v-model="loginForm.passWord" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(loginFormRef)" class="sub-btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="scss">
.login-box {
    height: calc(100vh - 35px);
    width: 100%;
    background: url('../../assets/bgm.jpeg');
    box-sizing: border-box;
    padding-top: 200px;

    .loginForm {
        width: 350px;
        padding: 20px;
        background: white;
        border-radius: 20px;
        margin: 0 auto;

        .sub-btn {
            width: 100%;
        }

        h2 {
            text-align: center;
        }
    }
}
</style>
