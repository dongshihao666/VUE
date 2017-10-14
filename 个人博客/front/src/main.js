import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

import axios from "axios"
import vueAxios from "vue-axios"

import  router from "./router"

import  App from "./App.vue";
Vue.use(ElementUI)
Vue.use(vueAxios,axios)

var vm = new Vue({
    el: "#app",
    router,
    template:"<App />",
    components:{App}
})


