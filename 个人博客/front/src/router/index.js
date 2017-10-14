import Vue from 'vue'
// import ElementUI from 'element-ui'
import Router from "vue-router"

// Vue.use(ElementUI)
Vue.use(Router)

import  index from "../components/index.vue";
import  home from "../components/home.vue";
import  homepage from "../components/children/homepage.vue";
import  addArticle from "../components/children/addArticle.vue";
import  articleList from "../components/children/articleList.vue";
import  add_one from "../components/children/add_one.vue";
import  add_two from "../components/children/add_two.vue";
import  typeList from "../components/children/typeList.vue";
import  addPort from "../components/children/addPort.vue";
import  frontPort from "../components/children/frontPort.vue";
import  backPort from "../components/children/backPort.vue";
import  person from "../components/children/person.vue";
import  boke from "../components/children/boke.vue";
import  portList from "../components/children/portList.vue";
import  portDetail from "../components/children/portDetail.vue";

export default new Router({
    routes:[{
        name:"home",
        path:'/',
        component:home,
        children:[
            {
                name:"homepage",
                path:"/",
                component:homepage
            },
            {
                name:"addArticle",
                path:"addArticle",
                component:addArticle
            },
            {
                name:"articleList",
                path:"articleList",
                component:articleList
            },
            {
                name:"add_one",
                path:"add_one",
                component:add_one
            },
            {
                name:"add_two",
                path:"add_two",
                component:add_two
            },{
                name:"typeList",
                path:"typeList",
                component:typeList
            },{
                name:"addPort",
                path:"addPort",
                component:addPort
            }, {
                name:"portList",
                path:"portList",
                component:portList
            },{
                name:"person",
                path:"person",
                component:person
            },{
                name:"boke",
                path:"boke",
                component:boke
            },{
                name:"portDetail",
                path:"portDetail",
                component:portDetail
            }
        ]
    }
    ]
})




