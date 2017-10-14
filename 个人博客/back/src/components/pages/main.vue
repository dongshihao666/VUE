<template>
    
    <div class="main">

        <div class="mainleft">
            
            <el-button class="btn first" @click="show1 = !show1">文章管理</el-button>

            <div style="margin-top: 20px;">
                <el-collapse-transition>
                    <div v-show="show1">
                        <router-link class="transition-box" tag="div" to="/home/addArticle">添加文章</router-link>
                        <router-link class="transition-box" tag="div" to="/home/articleList">文章列表</router-link>
                    </div>
                </el-collapse-transition>
            </div>

            <el-button class="btn" @click="show2 = !show2">分类管理</el-button>

            <div style="margin-top: 20px;">
                <el-collapse-transition>
                    <div v-show="show2">
                        <router-link class="transition-box" tag="div" to="/home/add_one">增加一级分类</router-link>
                        <router-link class="transition-box" tag="div" to="/home/add_two">增加二级分类</router-link>
                        <router-link class="transition-box" tag="div" to="/home/typeList">分类管理</router-link>
                    </div>
                </el-collapse-transition>
            </div>
            <el-button class="btn" @click="show3 = !show3">接口管理</el-button>

            <div style="margin-top: 20px;">
                <el-collapse-transition>
                    <div v-show="show3">
                        <router-link class="transition-box" tag="div" to="/home/addPort">增加接口文档</router-link>
                        <router-link class="transition-box" tag="div" :to='{path:"/home/portList",query:{type:"font"}}'>前台接口列表</router-link>
                        <router-link class="transition-box" tag="div" :to='{path:"/home/portList",query:{type:"back"}}'>后台接口列表</router-link>
                    </div>
                </el-collapse-transition>
            </div>
            <el-button class="btn" @click="show4 = !show4">留言板管理</el-button>

            <div style="margin-top: 20px;">
                <el-collapse-transition>
                    <div v-show="show4">
                        <router-link class="transition-box" tag="div" to="/home/person">个人简介留言</router-link>
                        <router-link class="transition-box" tag="div" to="/home/boke">博客留言</router-link>
                    </div>
                </el-collapse-transition>
            </div>

        </div>

        <div class="mainright">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    export default {
        name: "mains",
        data: () => ({
            show1: false,
            show2: false,
            show3: false,
            show4: false
        })
    }

</script>
<style scoped>
    .mainright {
        height: 100%;
        width: 90%;
        padding-left: 220px;
    }

    .btn {
        width: 200px;
    }

    .first {
        margin-top: 50px;
    }

    .main {
        width: 100%;
        flex: 1;
    }

    .mainleft {
        width: 230px;
        height: 100%;
        float: left;
        background: #f2f2f2;
        padding-left: 10px;
    }

    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #20A0FF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>