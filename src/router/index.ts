import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Shop',//给组件跳转的路由命名
        component: () => import('../components/day04/Shop.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/day04/Register.vue')
    },
    {
        //params传参需要用  ：key
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../components/day04/Detail.vue')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});
