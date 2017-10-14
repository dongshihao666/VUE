<template>
    
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="接口地址" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>

        <el-form-item label="类型" prop="backorfont">
            <el-input v-model="ruleForm.backorfont"></el-input>
        </el-form-item>
        <el-form-item label="请求类型" prop="type">
            <el-input v-model="ruleForm.type"></el-input>
        </el-form-item>

        <el-form-item label="请求参数" prop="sendparams">
            <el-input class="area" type="textarea" v-model="ruleForm.sendparams"></el-input>
        </el-form-item>

        <el-form-item label="返回数据" prop="getparams">
            <el-input class="area" type="textarea" v-model="ruleForm.getparams" :autosize='{minRows:3,maxRows:10}'></el-input>
        </el-form-item>

    </el-form>

</template>
<script>
    export default {
        data() {
            return {
                ruleForm:null
            };
        },
        created(){
            this.ruleForm=this.$route.params.data
            console.log(this.$route.params)
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _this=this
                        this.axios.post("/api/apilist", this.ruleForm).then(function (data) {
                            console.log(data)
                            if (data.data.code == 2000) {
                                console.log(_this.$message)
                                _this.$message({
                                    showClose: true,
                                    message: '恭喜你，这是一条成功消息',
                                    type: 'success'
                                });
                            } else {
                                _this.$message({
                                    message: '提交失败',
                                    type: 'error'
                                });
                            }
                        })
                    } else {

                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>
<style>
    .el-breadcrumb:after,
    .el-breadcrumb:before,
    .el-button-group:after,
    .el-button-group:before,
    .el-form-item:after,
    .el-form-item:before,
    .el-form-item__content:after,
    .el-form-item__content:before {
        display: none;
    }

    .el-input,
    .el-input__inner {
        width: 200px;
    }

    .area {
        width: 400px
    }
</style>