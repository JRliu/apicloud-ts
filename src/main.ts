import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
api.aa()

new Vue({
    render: h => h(App)
}).$mount('#app')
