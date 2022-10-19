<script setup lang="ts">

type Tflag = {
    flag: boolean
}
defineProps<Tflag>()

</script>
<template>
    <div class="B">
        B
        我是传过来的值：{{flag}}
    </div>
</template>
<style scoped lang="scss">
.B {
    width: 200px;
    height: 200px;
    background: blue;
    color: white;
}
</style>
