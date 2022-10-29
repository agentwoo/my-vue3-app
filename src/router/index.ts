import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getRouter } from '../http/api'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/shop',
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
                    // {
                    //     path: '',//当路径为空时，组件Blank也会被渲染
                    //     component: () => import('../components/day05/Router/Blank.vue')
                    // }
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
    },
    {
        path: '/pinia',
        name: 'Pinia',
        component: () => import('../components/day08/StudyStore.vue'),
        children: [
            {
                path: 'jiegou',
                name: 'Jiegou',
                component: () => import('../components/day08/A.vue')
            },
            {
                path: 'action',
                name: 'Action',
                component: () => import('../components/day08/Action.vue')
            },
            {
                path: 'getters',
                name: 'Getters',
                component: () => import('../components/day08/Getters.vue')
            },
            {
                path: 'api',
                name: 'Api',
                component: () => import('../components/day08/StoreApi.vue')
            }
        ]
    },
    {
        path: '/elementPlus',
        name: 'ELementPlus',
        component: () => import('../components/day09/StudyElementPlus.vue'),
        children: [
            {
                path: 'a',
                name: 'A',
                component: () => import('../components/day09/A.vue')
            },
            {
                path: 'b',
                name: 'B',
                component: () => import('../components/day09/B.vue')
            },
            {
                path: 'slotCss',
                name: 'SlotCss',
                component: () => import('../components/day09/Style/SlotCss.vue')
            },
            {
                path: 'cssModule',
                name: 'CssModule',
                component: () => import('../components/day09/Style/CssModule.vue')
            },
            {
                path: 'test',
                name: 'Test',
                component: () => import('../components/day09/test/A.vue')
            }
        ]
    },
    {
        path: '/loginView',
        name: 'LoginView',
        component: () => import('../components/Demo/LoginView.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Demo/Home.vue'),
        children: [
            {
                path: '',
                name: 'Welecom',
                component: () => import('../components/Demo/BlankView.vue')
            },
            {
                path: 'order',
                name: 'OrderView',
                meta: {
                    isShow: true,
                    title: '订单列表'
                },
                component: () => import('../components/Demo/OrderView.vue')
            },
            {
                path: 'user',
                name: 'UserView',
                meta: {
                    isShow: true,
                    title: '用户列表'
                },
                component: () => import('../components/Demo/UserView.vue')
            },
            {
                path: 'role',
                name: 'RoleView',
                meta: {
                    isShow: true,
                    title: '角色列表'
                },
                component: () => import('../components/Demo/RoleView.vue'),
            },
            {
                path: 'authority',
                name: 'AuthorityView',
                meta: {
                    isShow: false,
                    title: '权限列表'
                },
                component: () => import('../components/Demo/AuthorityView.vue')
            }
        ]
    }
]

// const router = createRouter({
export const router = createRouter({
    history: createWebHistory(),
    routes
})


// import.meta.glob('../views/**/*.vue')

//路由拦截
// router.beforeEach(async (to) => {
//     // 如果没有登录，则只能进入登录页面
//     const token: (string | null) = localStorage.getItem('token')
//     if (!token && to.path !== "/loginView") {
//         return '/loginView'
//     } else if (to.path !== 'loginView' && token) {
//         if (router.getRoutes().length === 36) {
//             // 添加动态路由
//             let routerData: any = await getRouter()
//             routerData = routerData.data
//             routerData.forEach((v: any) => {
//                 const routerObj: RouteRecordRaw = {
//                     path: v.path,
//                     name: v.name,
//                     meta: v.meta,
//                     component: () => import(`../views/${v.path}.vue`)
//                 }
//                 router.addRoute("home", routerObj)
//             })
//             router.replace(to.path)
//         }
//     }
// })

// export default router
