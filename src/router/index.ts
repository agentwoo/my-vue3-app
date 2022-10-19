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
    },
    {
        path: '/provide',
        name: 'Provide',
        component: () => import('../components/day03/StudyProvide.vue')
    },
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('../components/day01/layout/index.vue')
    },
    {
        path: '/slot',
        name: 'Slot',
        component: () => import('../components/day06/Slot/StudySlot.vue'),
        children: [
            {
                // path: 'dslot',
                path: '/slot/dslot',
                name: 'DSlot',
                component: () => import('../components/day06/Slot/DSlot.vue')
            }
        ]
    },
    {
        path: '/suspense',
        name: 'Suspense',
        component: () => import('../components/day06/Suspense/StudySuspense.vue')
    },
    {
        path: '/transition',
        name: 'Transition',
        component: () => import('../components/day07/Transition/StudyTransition.vue'),
        children: [
            {
                path: 'transition2',
                name: 'Transition2',
                component: () => import('../components/day07/Transition/Transition2.vue')
            },
            {
                path: 'transition3',
                name: 'Transition3',
                component: () => import('../components/day07/Transition/Transition3.vue')
            },
            {
                path: 'transition4',
                name: 'Transition4',
                component: () => import('../components/day07/Transition/Transition4.vue')
            }
        ]
    },
    {
        path: '/eventBus',
        name: 'EventBus',
        component: () => import('../components/day07/EventBus/index.vue'),
        children: [
            {
                path: 'eventBusDemo',
                name: 'EventBusDemo',
                component: () => import('../components/day07/EventBus/Demo/Demo.vue'),
            },
            {
                path: 'bus',
                name: 'Bus',
                component: () => import('../components/day07/EventBus/Bus/StudyEventBus.vue'),
            }
        ]
    },
    {
        path: '/vmodel',
        name: 'Vmodel',
        component: () => import('../components/day07/Vmodel/StudyVmodel.vue')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});
