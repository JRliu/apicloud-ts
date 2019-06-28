<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <p>{{ test }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
    name: 'app',
    components: {
        HelloWorld
    },
    data() {
        return {
            test: 'afs大家福利卡'
        }
    }
})
</script>

<style lang="scss">
body {
    background-color: #fff;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
