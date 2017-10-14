<template>
    <div class="home">
        <div class="header">
            <h1>个人博客</h1>
            <p>当前登录账户: <span>root</span> </p>
        </div>
        <mains></mains>
    </div>
</template>
<script>
 
    import mains from "./pages/main.vue"

    export default {
        components:{
            mains
        }
    }

</script>
<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   
    .home {
        width: 100%;
        height: 100%;
    }

    .home {
        display: flex;
        flex-direction: column;
    }

    .header {
        width: 100%;
        height: 50px;
        background: #5f9ea0;
    }

    .header>h1 {
        color: #fff;
        font-size: 22px;
        padding: 10px 10px;
        float: left;
    }

    .header>p {
        color: #fff;
        float: right;
        font-size: 20px;
        padding: 10px 10px;
    }

</style>