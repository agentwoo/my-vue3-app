<script setup lang='ts'>
import { ref, reactive } from 'vue'
const Val = ref<number>(123)

</script>
<template>
    <div class="bbb">
        BBB
        <input type="text" v-model="Val">
    </div>
</template>
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

$fontColor: red;

.bbb {
    color: $fontColor;
}
</style>
