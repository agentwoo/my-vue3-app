<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// const msg = "hello"
type TValue = string | number
type TProps = {
    msg: TValue
}

let value = 123 as TValue
value = "abc"


const my_num = ref(100)
const m = reactive({ my_num: 200 })
const total$ = computed(() => my_num.value + m.my_num)
const totalten$ = computed(() => total$.value * 10)

// defineProps<{
//     msg: TValue
// }>()

defineProps<TProps>()


function add(num: number = 1) {
    console.log("add", num)
    my_num.value += num
    return () => console.log("added")
}


const arr: (number | string)[] = [1, 2, 3]
arr.push(4)


const arr2: Array<number | string> = [1, 2, 3]
arr2.push(4)
arr2.push("ww")



const arr3: number[] = [1, 2, 3]
const arr4: string[] = ["a", "b", "c"]

let arr5: number[] | string[]

arr5 = arr3
arr5 = arr4

let arr6: [number, string] = [123, "abc"]

</script>

<template>
    <div>
        hello,{{msg}}
    </div>
    <div>
        my_num:{{my_num}}<button @click="my_num++">+</button>
    </div>
    <div>
        m.my_num:{{m.my_num}}<button @click="m.my_num++">+</button>
    </div>
    <div>
        total$:{{total$}}
    </div>
    <div>
        totalten$:{{totalten$}}
    </div>


    <!-- <button @click="add">测试1</button> -->
    <button @click="(add(3))">测试2</button>
    <button @click="()=>add">测试3</button>
    <button @click="()=>add(4)">测试4</button>
</template>

<style scoped lang="sass">

</style>
