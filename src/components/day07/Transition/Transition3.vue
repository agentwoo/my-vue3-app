<script setup lang="ts">
import { ref } from 'vue'
const flag = ref<boolean>(true)

const EnterFrom = (el: Element) => {
    console.log('进入之前');
}
const EnterActive = (el: Element, done: Function) => {
    console.log('进入过渡曲线');
    setTimeout(() => {
        done()
    }, 3000)
}
const EnterTo = (el: Element) => {
    console.log('过渡完成');
}
const EnterCancel = (el: Element) => {
    console.log('进入过渡效果被打断')
}


const LeaveFrom = () => {
    console.log('离开之前');
}
const LeaveActive = (el: Element, done: Function) => {
    console.log('离开过渡曲线');
    setTimeout(() => {
        done()
    }, 3000)
}
const LeaveTo = () => {
    console.log('离开完成');
}
const LeaveCancel = () => {
    console.log('离开效果被打断');
}

</script>
<template>
    <h2>生命周期</h2>
    <div class="content">
        <button @click="flag=!flag">switch</button>
        <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
            @before-leave="LeaveFrom" @leave="LeaveActive" @after-leave="LeaveTo" @leave-cancelled="LeaveCancel">
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>
<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    background: greenyellow;
}


.v-enter-from,
.v-leave-to {
    width: 0;
    height: 0;
    transform: rotate(360deg);
}


.v-enter-active,
.v-leave-active {
    transition: all 1.5s ease;
}
</style>
