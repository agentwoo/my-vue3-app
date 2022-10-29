import axios from 'axios';
import { ElMessage } from 'element-plus'

enum MSGS {
    "操作成功" = 200,
    "密码错误",
    "账号错误",
    "请求异常"
}

//创建http实例
const $http = axios.create({
    baseURL: 'https://www.fastmock.site/mock/bee80bd307c6ceaac70cae26a7b880a6/mock-learing',
    timeout: 2000,
    headers: {
        "Content-type": "application/json;charset=utf-8"
    }
})

//请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

//响应拦截
$http.interceptors.response.use(res => {
    const code: number = res.data?.code
    if (code !== 200) {
        ElMessage.error(MSGS[code])
        return Promise.reject(res.data)
    }
    return res.data
}), (err: any) => {
    console.log(err);
}

export default $http
