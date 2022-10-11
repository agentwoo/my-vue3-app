<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const msg = "{{123}}"
</script>

<template>
    <HelloWorld :msg="123" />
    <!-- <HelloWorld msg="123" />
    <HelloWorld msg="'123'" />
    <HelloWorld :msg="'123'" />
    <HelloWorld msg="{{123}}" />
    <div>hello,{{123}}</div>
    <div>hello,{{msg}}</div> -->

</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
