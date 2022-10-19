<script setup lang="ts">

defineProps<{
    modelValue: boolean,
    textValue: string
}>()

const emit = defineEmits(['update:modelValue', 'update:textValue'])

const close = () => {
    emit('update:modelValue')
}

const change = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:textValue', target.value)
}

</script>

<template>
    <div class="A" v-if="modelValue">
        <button @click="close">关闭</button>
        {{modelValue}}
        <div class="B">
            <h3>我是v-model子组件dialong</h3>
            内容：<input type="text" :value="textValue" @input="change">
        </div>
    </div>
</template>

<style scoped lang="scss">
.A {
    width: 600px;
    height: 200px;
    border: 4px solid gray;
}

.B {
    margin-top: 50px;
}

button {
    float: right;
}
</style>
