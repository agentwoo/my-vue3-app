<script setup lang="ts">
import { useTestFourStore } from '../../store'
const Test = useTestFourStore()


//state发生改变是会触发$subscribe
// Test.$subscribe((args, state) => {
//     console.log("args========>", args);
//     console.log("state=======>", state);
// }, {
//     detached: true,
//     deep: true
// })

//调用action时会触发$onAction
Test.$onAction((args) => {
    args.after(() => {
        //最后调用
        console.log('after');
    })
    console.log('args=====>', args);
    //true的作用是当前组件被销毁后依然可以监听到
}, true)

const change = () => {
    Test.setName()
}

//设置成state的原始数据
const reset = () => {
    Test.$reset()
}


</script>

<template>
    <div class="A">
        <div class="B">
            <h3>Api</h3>
            <p>{{Test.user.name}}--{{Test.user.age}}</p>
            <hr>
            <p>user.age:{{Test.getUserAge}}</p>
            <hr>
            <p>Test.name:{{Test.name}}</p>
            <hr>
            <button @click="change">change</button>
            <button @click="reset">reset</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.A {
    display: flex;
    justify-content: center;

    .B {
        width: 400px;
        height: 300px;
        border: 3px solid gray;
    }
}

button {
    margin-right: 10px;
}
</style>
