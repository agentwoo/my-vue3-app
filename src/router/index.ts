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
        // path: '/detail',
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../components/day04/Detail.vue')
    },
    {
        path: '/f',
        name: 'F',
        component: () => import('../components/test/F.vue')
    },
    {
        path: '/fone',
        name: 'FOne',
        component: () => import('../components/day05/Router/FOne.vue'),
        children: [
            {
                path: '/fone/son1',//子路由不用加 '/'
                // path:'son1',
                name: 'Son1',
                component: () => import('../components/day05/Router/Son1.vue'),
                children: [
                    {
                        path: '/fone/son1/child1',
                        // path:'child1',
                        name: 'Child1',
                        component: () => import('../components/day05/Router/Child1.vue')
                    },
                    {
                        path: '',//当路径为空时，组件Blank也会被渲染
                        component: () => import('../components/day05/Router/Blank.vue')
                    }
                ]
            },
            {
                path: 'son2',
                name: 'Son2',
                component: () => import('../components/day05/Router/Son2.vue')
            }
        ]
    },
    {
        path: '/tofamily',
        name: 'toFamily',
        component: () => import('../components/day05/To/toFamily.vue')
    },
    {
        path: '/teleport',
        name: 'Teleport',
        component: () => import('../components/day05/StudyTeleport/StudyTeleport.vue')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});
