import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(BootstrapVue);

import Echo from "laravel-echo"

window.Pusher = require('pusher-js');
const prodEnv = require('./prod.env')

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: prodEnv.PUSHER_KEY,
    wsHost: 'api.pizzaorders.pl',
    authEndpoint: 'https://api.pizzaorders.pl/broadcasting/auth',
    wsPort: 6001,
    wssPort: 6001,
    disableStats: false,
})

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
