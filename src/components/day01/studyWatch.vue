<script setup lang="ts">
//watch监听器
import { ref, watch, reactive } from 'vue'

let message = ref<string>('')
let message2 = ref<string>('')

let message3 = ref({
    nav: {
        bar: {
            name: " "
        }
    }
})

let message4 = reactive({
    nav: {
        bar: {
            name: "张三"
        }
    }
})

let message5 = reactive({
    name: "张三",
    age: 18
})

//普通写法
// watch(message, (newValue, oldValue) => {
//     console.log("newValue", newValue)
//     console.log("oldValue", oldValue)
// })

//数组写法
watch([message, message2], (newValue, oldValue) => {
    console.log("newValue", newValue)
    console.log("oldValue", oldValue)
})

//深度监听 拿到的旧值会有bug
// watch(message3, (newVal, oldVal) => {
//     console.log("newVal", newVal)
//     console.log("oldVal", oldVal)
// }, {
//     deep: true,
//     immediate: true
// })


//用reactive可以用不开启深度监视
// watch(message4, (newVal, oldVal) => {
//     console.log("newVal", newVal)
//     console.log("oldVal", oldVal)
// })

//监听到message5中所有变化
// watch(message5, (newVal, oldVal) => {
//     console.log("newVal", newVal)
//     console.log("oldVal", oldVal)
// })

//只监听message5中指定的值得变化
watch(() => message5.name, (newVal, oldVal) => {
    console.log("newVal", newVal)
    console.log("oldVal", oldVal)
})



</script>

<template>
    1<input type="text" v-model="message"><br>
    2<input type="text" v-model="message2"><br>
    3<input type="text" v-model="message3.nav.bar.name"><br>
    4<input type="text" v-model="message4.nav.bar.name"><br>

    5<input type="text" v-model="message5.name"><br>
    5<input type="text" v-model="message5.age"><br>
</template>

<style lang="sass">

</style>
