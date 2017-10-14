var query = require("../../config/db_connect")
var express = require("express")
var router = express.Router()
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")
const moment = require('moment'); //数据库时间转js时间格式

var nodemailer = require('nodemailer'); //邮件发送包

var transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    service: 'qq',
    port: 587, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: '671274981@qq.com',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: 'hcrqekqkpqfoihjc'
    }
});



// sql执行成功与否的检测
var sqlStateFn = function(req, res, next, sql) {
    return new Promise(function(resolve, reject) {
        query(sql, function(err, rows, fields) {
            console.log(err)
            if (err) {
                reject("err")
            } else {
                resolve("ok")
            }
        })
    })
}

// 个人简历部分的留言插入接口
router.post("/insertmsg", function(req, res, next) {
    var sql = `insert into client_msg(id,ip,country,province,city,name,email,content,tel,type,time) values('${generateUUID()}','${req.body.ip}','${req.body.country}','${req.body.province}','${req.body.city}','${req.body.name}','${req.body.email}','${req.body.content}','${req.body.tel}','resume','${creatTime()}')`
    console.log(sql)
    sqlStateFn(req, res, next, sql).then(function(data) {
        res.send({
            code: "7011",
            data: null,
            msg: "插入成功"
        })
        // 发送邮件
        var mailOptions = {
            from: '671274981@qq.com', // 发件地址
            to: '671274981@qq.com', // 收件列表
            subject: req.body.name, // 标题
            //text和html两者只支持一种
            // text: ``req.body.content, // 标题
            html: `<ul>
                <li>
                    <b>姓名：</b><span>${req.body.name}</span>
                </li>
                 <li>
                    <b>邮箱：</b><span>${req.body.email}</span>
                </li>
                 <li>
                    <b>手机号：</b><span>${req.body.tel}</span>
                </li>
                <li>
                    <b>ip：</b><span>${req.body.ip}</span>
                </li>
                <li>
                    <b>省份：</b><span>${req.body.province}</span>
                </li>
                <li>
                    <b>城市：</b><span>${req.body.city}</span>
                </li>
                 <li>
                    <b>内容：</b><div>${req.body.content}</div>
                </li>
            </ul>` // html 内容
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });
        // 邮件回馈
        var mailOptions2 = {
            from: '671274981@qq.com', // 发件地址
            to: req.body.email, // 收件列表
            subject: "王尼玛留言", // 标题
            //text和html两者只支持一种
            text: "已经收到您的留言", // 标题
            // html: '<b>Hello world ?</b>' // html 内容
        };
        transporter.sendMail(mailOptions2, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });
    }, function(err) {
        res.send({
            code: "7012",
            data: null,
            msg: "插入失败"
        })
    }).catch(function(err) {
        console.log(err)
    })
})
// 接口查询
router.get("/lists", function(req, res, next) {
        var sql = `select * from client_msg order by time desc`
        console.log(sql)
        query(sql, function(err, rows, fields) {
            if (err) {
                res.send({
                    code: "0321",
                    msg: "数据查询失败"
                })
            } else {
                rows.map(function(i) {
                    return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
                });
                res.send({
                    code: "0322",
                    msg: "数据查询成功",
                    data: rows
                })
            }

        })
    })





module.exports = router;