<template>
        <div class="main">
        

        <div class="section">

            <div class="flex">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide ul">
                            <ul>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                            </ul>
                            <ul>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                            </ul>
                        </div>
                        <div class="swiper-slide ul">
                            <ul>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                            </ul>
                            <ul>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                                <li><a href="#">京东超市 <span><i class="iconfont icon-wode"></i></span> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="news">
                <p>京东 <span>快报</span> <i>热</i> iphone手机最神奇的地方，原来这 </p>
            </div>

            <div class="sec">
                <ul>
                    <li><img src="../img/product/1.jpg" alt=""></li>
                    <li><img src="../img/product/2.jpg" alt=""></li>
                    <li><img src="../img/product/3.jpg" alt=""></li>
                    <li><img src="../img/product/4.jpg" alt=""></li>
                    <li><img src="../img/product/5.jpg" alt=""></li>
                </ul>
            </div>

            <div class="pic1"><img src="../img/product/6.jpg" alt=""></div>

            <div class="content">
                <img src="../img/product/7.jpg" alt="">
            </div>

            <div class="pic2">
                <img src="../img/product/8.jpg" alt="">
            </div>


            <div class="tit">
                <p>够/实/惠</p>
            </div>

        </div>

    </div>
</template>



<script>
    export default {
        name: 'index',
        data() {
            return {
                arr: []
            }
        },
        mounted() {

            var that = this;
            console.log(this)
            this.axios.get('/data').then(function(data) {

                that.arr = data.data.data;

            })

            var swiper = new this.$swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                autoplay: 1000
            })

        },

    }
</script>
<style>
    @import "../css/reset.css";
    @import "../css/common.css";
</style>