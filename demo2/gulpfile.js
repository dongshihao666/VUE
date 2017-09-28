var gulp = require('gulp');
var server = require('gulp-webserver');

var urlTool = require('url')
var qs = require('qs');


var json = [
    {
        img:"img/2.jpg",
        title:'一说智能机器人儿童座椅机器人弯路 早教故事机',
        price:"￥14.9"
    },
    {
        img:"img/2.jpg",
        title:'一说智能机器人儿童座椅机器人弯路 早教故事机',
        price:"￥14.9"
    },
    {
        img:"img/2.jpg",
        title:'一说智能机器人儿童座椅机器人弯路 早教故事机',
        price:"￥14.9"
    },
    {
        img:"img/2.jpg",
        title:'一说智能机器人儿童座椅机器人弯路 早教故事机',
        price:"￥14.9"
    },
    {
        img:"img/2.jpg",
        title:'一说智能机器人儿童座椅机器人弯路 早教故事机',
        price:"￥14.9"
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