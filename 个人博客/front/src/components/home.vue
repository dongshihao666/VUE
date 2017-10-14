<template>
    <div class="home">
        <div class="top">
            <h1><img src="../../static/img/14.jpg" alt="">
                <p>董小怪的微博</p>
            </h1>
        </div>
        <mains></mains>
        <acticle></acticle>
    </div>
</template>
<script>
    import mains from "./pages/main.vue"
    import acticle from "./pages/acticle.vue"

    export default {
        components: {
            mains,
            acticle
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
        background: url('../../static/img/big.jpg');
        background-size: 100% 100%;
    }

    .home {
        display: flex;
        flex-direction: column;
    }

    .top {
        width: 100%;
        height: 100px;
        margin-top: 20px;
    }

    .top>h1>img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
        margin: 10px 40px;
    }

    .top>h1>p {
        float: left;
        margin: 17px 15px;
        color: #fff;
    }
</style>