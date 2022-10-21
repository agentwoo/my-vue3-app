<script setup lang="ts">
import SlotCss2 from './SlotCss2.vue'

import { reactive, ref } from 'vue'
let style = ref<string>('red')

const style2 = reactive({
    color: 'pink'
})



//随机获取字体颜色
let Fcolor = ref<string>('red')
let C: Array<string> = ['red', 'green', 'yellow', 'greenyellow', 'blue']
const roundClor = () => {
    let index = Math.round(Math.random() * (C.length - 1))
    Fcolor.value = C[index]
}



</script>
<template>
    <SlotCss2>
        <div class="A">私人订制</div>
    </SlotCss2>

    <div>Jack</div>
    <div>Tom</div>
    <div>Jrem</div>

    <div class="B">
        <div class="BB">动态css</div>
        <div class="CC">动态css2</div>
        <div class="DD">
            随机颜色
            <button @click="roundClor">随机颜色</button>
        </div>
    </div>





</template>
<style scoped lang="scss">
// 全局样式更改，与下方style中效果一致
// :global(div) {
//     color: red;
// }
.B {
    display: flex;
    justify-content: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border: 2px solid gray;
        margin-left: 20px;
    }

    .BB {
        color: v-bind(style);
    }

    .CC {
        color: v-bind('style2.color');
    }

    .DD {
        color: v-bind('Fcolor');
    }

}
</style>


<!-- 全局样式更改，style中不加scoped -->
<!-- <style>
div {
    color: blue;
}
</style> -->
