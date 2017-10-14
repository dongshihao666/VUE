<template>
    <div class="box">
        <h1>个人博客</h1>
        <ul>
            <li class="top" v-focus="loginname">
                <label for="aa">账户:</label>
                <input type="text" id="aa" class="user" Name="Userame" placeholder="用户名" v-model="loginname.val" @blur="fn(loginname)"></li>
            <li class="top bottom" v-focus="loginpw">
                <label for="cc">密码:</label>
                <input type="password" id="cc" class="pwd" placeholder="请输入密码" v-model="loginpw.val" @blur="fn(loginpw)">
            </li>
            <li>
                <el-button type="success" id="login" @click="login">登录</el-button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的姓名不符合中文格式",
                    msg: "您输入的姓名不符合中文格式",
                    test: /^[a-zA-z]+$/,
                    state: false,
                    blur: false,
                },
                loginpw: {
                    val: "",
                    msgread: "您输入的密码格式不对",
                    blur: false,
                    msg: "您输入的密码格式不对",
                    test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                    state: false,
                }
            }
        },
        methods: {
            login() {
                // 判断是否值是否正确
                var _this = this
                if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
                    this.axios.post("/api/back_class", {
                        loginname: this.loginname.val,
                        loginpw: this.loginpw.val
                    }).then(function (data) {
                        console.log(data)
                        _this.$message(data.data.msg);
                        if (data.data.code == "1001") {
                            sessionStorage.setItem("userId", data.data.userid);
                            sessionStorage.setItem("username", _this.loginname.val);
                            _this.$router.push("/home")
                        }
                    })
                } else {
                    alert("请正确填写用户名密码")
                }

            },
            // 必填项的验证
            fn(val) {
                val.blur = true;
                console.log(val.blur)
            }
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var $testState = option.value.test.test(option.value.val)
                    if (option.value.val != "") {
                        if ($testState) {
                            option.value.state = false
                        } else {
                            option.value.state = true
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            option.value.state = true
                            option.value.msg = "不能为空"
                        } else {
                            option.value.state = false
                        }
                    }
                }
            }
        }
    }

</script>

<style>
    * {
        list-style: none;
    }

    .box {
        width: 400px;
        height: 400px;
        border: 1px solid #ef5a00;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -200px;
        border-radius: 10px;
    }

    .top {
        width: 300px;
        height: 35px;
        border: 1px solid #ccc;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        border-radius: 5px;
        padding: 0 10px;
    }

    .top>label {
        line-height: 35px;
    }

    .user {
        width: 230px;
        float: right;
        border: none;
        height: 32px;
        outline: none;
    }

    .pwd {
        width: 230px;
        float: right;
        border: none;
        height: 32px;
        outline: none;
    }

    .bottom {
        top: 180px;
    }

    #login {
        position: absolute;
        top: 260px;
        width: 300px;
        height: 45px;
        border-radius: 5px;
        background: #ef5a00;
        border: none;
        color: #fff;
        left: 50%;
        margin-left: -150px;
        outline: none;
    }

    .box>h1 {
        font-size: 24px;
        padding: 30px;
        color: #ef5a00;
    }

    .top>label {
        float: left;
    }
</style>