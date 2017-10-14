<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="接口地址" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="backorfont">
            <el-select v-model="ruleForm.backorfont" placeholder="请选择">
                <el-option label="前台接口" value="font"></el-option>
                <el-option label="后台接口" value="back"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="请求类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择">
                <el-option label="get" value="get"></el-option>
                <el-option label="post" value="post"></el-option>
                <el-option label="formdata" value="formdata"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="请求参数" prop="sendparams">
            <el-input class="area" type="textarea" v-model="ruleForm.sendparams"></el-input>
        </el-form-item>
        <el-form-item label="返回数据" prop="getparams">
            <el-input class="area" type="textarea" v-model="ruleForm.getparams"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    title: '',
                    url: '',
                    backorfont: '',
                    type: '',
                    sendparams: '',
                    getparams: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    url: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    backorfont: [
                        { required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    sendparams: [
                        { required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    getparams: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ]
                }
            };
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