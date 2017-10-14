<template>

    <div class="main">

        <div class="mainleft">

            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" style="font-size:20px;">个人博客</el-menu-item>
                <el-submenu :index="item.onedata.id" v-for="item in navData">
                    <template slot="title">{{item.onedata.cnname}}</template>
                    <el-menu-item :index="i.id" v-for="i in item.twodata" >{{i.cnname}}</el-menu-item>
                </el-submenu>
            </el-menu>

        </div>

        <!--<div class="mainright">
            <router-view></router-view>
        </div>-->

    </div>
</template>

<script>
    export default {
        name: "mains",
        data() {
            return {
                activeIndex: '1',
                navData: []
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {
            var that = this;
            this.axios.get('/api/front_article/getNav').then((data)=> {
                if (data.data.code == '6010') {
                    // console.log(data.data.data)
                    this.navData = data.data.data;
                    // console.log(this.navData)
                }
            })
        }
    }

</script>
<style scoped>
    /*.mainright {
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
    }*/
</style>