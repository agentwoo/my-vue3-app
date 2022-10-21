import { defineStore } from 'pinia'
import { Names } from './store-name'


//StudyStore&&A中使用
export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1,
            name: '张三'
        }
    },
    //computed 修饰一些值
    getters: {

    },
    //methods 可以做同步-异步都可以做-提交state
    actions: {
        // setCurrent() {
        //     this.current = 999
        // }

        //接收参数
        setCurrent(num: number) {
            this.current = num
        }
    }
})


type User = {
    name: string,
    age: number
}
let result: User = {
    name: '张三',
    age: 18
}

//Action中使用--同步调用
export const useTestTwoStore = defineStore(Names.TESTTWO, {
    state: () => {
        return {
            user: <User>{},
            name: '李四'
        }
    },
    getters: {

    },
    actions: {
        setUser() {
            this.user = result;
            this.name = result.name
        }
    }
})



const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Jerry',
                age: 12
            })
        }, 2000);
    })
}

//Action中使用--异步调用
export const useTestThreeStore = defineStore(Names.TESTTHREE, {
    state: () => {
        return ({
            user: <User>{},
            name: '杰瑞'
        })
    },
    getters: {

    },
    actions: {
        async setUser() {
            const result = await Login()
            this.user = result
            this.setName('杰瑞表哥')
        },
        setName(name: string) {
            this.name = name
        }
    }
})


//getters使用方法
export const useTestFourStore = defineStore(Names.TESTFOUR, {
    state: () => {
        return ({
            user: <User>{},
            name: '佩奇'
        })
    },
    getters: {
        //newName方法可以直接在模板中使用,这样写无法推断出类型，需手动添加类型
        newName(): string {
            return `${this.name}--${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
    actions: {
        setName() {
            this.name = '乔治'
            this.user = result
        }
    }
})
