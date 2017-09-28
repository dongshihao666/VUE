import Vue from "vue";
import Router from "vue-router"
import index from "./components/index.vue"
import axios from "axios"
import Vueaxios from "vue-axios"
import mintui from "mint-ui"


import fenlei from "./components/fenlei.vue"
import faxian from "./components/faxian.vue"
import gouwuche from "./components/gouwuche.vue"
import wode from "./components/wode.vue"


Vue.use(Vueaxios, axios)

require('swiper/dist/css/swiper.css')

import swiper from "swiper"


// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

var tool = {
    install: function(Vue) {
        Object.defineProperty(Vue.prototype, "$swiper", {
            value: swiper
        })
    }
}

Vue.use(tool)

var router = new Router({
    linkActiveClass:"bg",
    routes: [{
            name: 'index',
            path: "/",
            component: index
        }, {
            name: 'index',
            path: "/index",
            component: index
        },
        {
            name: 'fenlei',
            path: "/fenlei",
            component: fenlei
        }, {
            name: 'faxian',
            path: "/faxian",
            component: faxian
        }, {
            name: 'gouwuche',
            path: "/gouwuche",
            component: gouwuche
        }, {
            name: 'wode',
            path: "/wode",
            component: wode
        }
    ]
})


Vue.use(Router);


var app = new Vue({
    el: "#app",
    // template: '<index />',
    // components: {
    //     index: index
    // },
    router
})