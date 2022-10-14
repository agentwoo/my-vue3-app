<script setup lang="ts">
import { watchEffect, ref } from 'vue'

let message = ref<string>("飞机")
let message2 = ref<string>("大炮")


//自动调用
// watchEffect(() => {
//     console.log("message====>", message.value)
//     console.log("message2====>", message2.value)
// })


//先执行oninvalidate回调函数
// watchEffect((oninvalidate) => {
//     console.log("message===>", message.value)
//     console.log("message2===>", message2.value)
//     oninvalidate(() => {
//         console.log("before")
//     })
//     //先打印出before，再打印出message、message2
// })


// const stop = watchEffect((oninvalidate) => {
//     console.log("message===>", message.value)
//     console.log("message2===>", message2.value)
//     oninvalidate(() => {
//         console.log("before")
//     })
// })
//停止监听
const stopWatch = () => stop()


const stop = watchEffect((oninvalidate) => {
    let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
    console.log(message.value)
    console.log(message2.value)
    console.log(ipt, 'ellllllll')

    //组件更新前执行
    oninvalidate(() => {
        console.log("before")
    })
}, {
    //组件更新后执行
    flush: "post",
    //提供断点调试,触发监听时进入debugger
    onTrigger(e) {
        debugger
    }
})

</script>

<template>
    <input type="text" v-model="message" id="ipt"><br>
    <input type="text" v-model="message2"><br>
    <button @click="stopWatch()">停止监听</button>
</template>

<style lang="sass">

</style>
