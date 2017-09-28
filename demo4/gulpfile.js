var gulp = require('gulp');
var server = require('gulp-webserver');

var urlTool = require('url')
var qs = require('qs');


var json = [
    {
        img:"img/3.jpg",
        title:"QQ看点",
        content:"篮球励志网：NBA无心插柳柳的五可思议"
    },
    {
        img:"img/4.jpg",
        title:"网站1506A",
        content:"朱昭君：白醋爱 11:49:28国庆节即将来临 "
    },
    {
        img:"img/5.jpg",
        title:"群助手",
        span:"[1个群有新消息]"
    },
    {
        img:"img/6.jpg",
        title:"服务号",
        content:"腾讯课堂：你有一门课堂即将开始"
    },
    {
        img:"img/7.jpg",
        title:"腾讯新闻",
        content:"大吗卖鱼，被咬手 嚎啕大哭"
    },
    {
        img:"img/8.jpg",
        title:"沈旭航",
        content:"[QQ电话]未接听，点击回拨"
    },
    {
        img:"img/9.jpg",
        title:"购物号",
        content:"孙红雷晒张艺兴表情包直言"
    }
]

gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:9000,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*')

                var urlObj =  urlTool.parse(req.url);

                var method = req.method;

                var pathname = urlObj.pathname;

                // var getParam = urlObj.query;

                if(method==="POST"){

                    var postData = '';

                    req.on('data',function(chunk){

                        postData +=chunk;

                    })



                    req.on('end',function(){
                        var postParmas = qs.parse(postData)


                        switch(pathname){
                            case '/goodslist':
                            res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(json))
                            res.end()
                            break;
                            default :
                        }

                        res.end()
                    })


                }

            }
        }))
})


gulp.task('default',['mockServer'])