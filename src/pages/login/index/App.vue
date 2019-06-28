<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="../"> -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <p @click="test" v-for="i in 2" :key="i" class="test">safsadfadsf</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import a from 'typings/globals'
// Vue.test
export default Vue.extend({
    name: 'app',
    components: {
        HelloWorld
    },
    methods: {
        test() {
            api.openTabLayout({
                name: 'help',
                url: 'widget://pages/member/index.html',
                title: '帮助',
                hideNavigationBar: false,
                navigationBar: {
                    background: 'red',
                    color: '#fff'
                    // leftButtons: [
                    //     {
                    //         iconPath: 'widget://image/back.png'
                    //     }
                    // ]
                }
            })
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

    .test {
        font-size: 20px;
        font-weight: 600;
        color: green;
    }
}
</style>
