<script setup lang="ts">
import { ref } from 'vue'
const flag = ref<boolean>(true)
</script>
<template>
    <h2>自定义指令</h2>
    <div class="content">
        <button @click="flag=!flag">switch</button>
        <transition enter-to-class="e-to" enter-active-class="e-active" enter-from-class="e-from"
            leave-from-class="l-from" leave-active-class="l-active" leave-to-class="l-to" name="fade">
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


.e-from,
.l-to {
    width: 0;
    height: 0;
    transform: rotate(360deg);
}


.e-active,
.l-active {
    transition: all 1.5s ease;
}
</style>
