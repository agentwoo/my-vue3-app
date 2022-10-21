<script setup lang="ts">
</script>
<template>
    <slot></slot>
    <div>12313213</div>
</template>
<style scoped lang="scss">
// ：slotted需借助于插槽
:slotted(.A) {
    color: greenyellow
}
</style>
