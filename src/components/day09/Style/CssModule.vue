<script setup lang="ts">
</script>
<template>
    <div>
        <div :class="$style.A">
            module
        </div>
        <template :class="$style.D">
            <div :class="[$style.A,$style.B]">
                module
            </div>
        </template>

    </div>
</template>
<style module scoped>
.D {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.A {
    font-size: 40px;
    color: pink
}

.B {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 200px;
    margin: 0, auto;
    border: 2px solid gray
}
</style>
