<script setup lang="ts">
import { ref } from 'vue'
const flag = ref<boolean>(true)
</script>
<template>
    <div class="content">
        <button @click="flag=!flag">switch</button>
        <!-- appear初次渲染 :duration设置过渡时间 type设置以transition还是animation过渡时间为准 -->
        <transition name="fade" appear :duration="2000" type="transition" mode="out-in">
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
    <router-link to="/transition/transition2">自定义指令</router-link>
    <router-link to="/transition/transition3" style="margin-left:20px">生命周期</router-link>
    <router-link to="/transition/transition4" style="margin-left:20px">Transition-group</router-link>
    <hr>
    <router-view></router-view>
</template>
<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    background: greenyellow;
}

// .fade-enter-from {
//     width: 0;
//     height: 0;
// }

// .fade-enter-active {
//     transition: all 1.5s ease;
// }

// .fade-enter-to .fade-leave-active这两个属性默认不写
// .fade-enter-to {}

// .fade-leave-from {}

// .fade-leave-active {
//     transition: all 1.5s ease;
// }

// .fade-leave-to {
//     width: 0;
//     height: 0;
// }


.fade-enter-from,
.fade-leave-to {
    width: 0;
    height: 0;
    transform: rotate(360deg);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1.5s ease;
}

// .fade-enter-to .fade-leave-from {}
</style>
