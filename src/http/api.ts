import $http from './index'

type loginData = {
    userName: string,
    passWord: string
}

export const login = (data: loginData) => $http({ url: '/login', method: "post", data })

export const getList = (data: any) => $http({ url: '/getList', method: "get", data })

export const getRoleList = () => $http({ url: '/getRoleList', method: "get" })

export const getUserList = () => $http({ url: '/getUserList', method: 'get' })

export const getAuthorirty = () => $http({ url: '/getAuthorirty', method: 'get' })

export const getRouter = () => $http({ url: '/getRouter', method: 'get' })
