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
const totol$ = computed(() => my_num.value + m.my_num)
const totolten$ = computed(() => totol$.value * 10)

// defineProps<{
//     msg: TValue
// }>()

defineProps<TProps>()



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
        totol$:{{totol$}}
    </div>
    <div>
        totolten$:{{totolten$}}
    </div>
</template>

<style scoped lang="sass">

</style>
