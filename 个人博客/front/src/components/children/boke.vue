<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
            <el-input class="input" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input class="input" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="tel">
            <el-input class="input" v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <el-input class="input" type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">发送</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    email: '',
                    tel: '',
                    content: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请填写姓名', trigger: 'change' }
                    ],
                    email: [
                        { required: true, message: '请填写邮箱', trigger: 'change' }
                    ],
                    tel: [
                        { required: true, message: '请填写手机', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请填写内容', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post("/api/msg_myresume/insertmsg", this.ruleForm).then(function (data) {
                            if (data.data.code == "7011") {
                                this.open2()
                            } else {
                                this.open4()
                            }
                        }.bind(this))
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，发送成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，发送失败');
            }
        }
    }

</script>

<style>
    .all[data-v-fb27f1c4] {
        margin-top: 30px;
        flex: 0.5;
    }

    .el-breadcrumb:after,
    .el-breadcrumb:before,
    .el-button-group:after,
    .el-button-group:before,
    .el-form-item:after,
    .el-form-item:before,
    .el-form-item__content:after,
    .el-form-item__content:before{
        display: none;
    }
    .input{
        width: 200px;
    }
</style>