<template>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <div>一级类名</div>

        <el-form-item label="一级中文类名" prop="cnname_one">
            <el-input v-model="ruleForm.cnname_one"></el-input>
        </el-form-item>

        <el-form-item label="一级英文类名" prop="enname_one">
            <el-input v-model="ruleForm.enname_one"></el-input>
        </el-form-item>

        <div>二级类名</div>
        <el-form-item label="二级中文类名" prop="cnname_two">
            <el-input v-model="ruleForm.cnname_two"></el-input>
        </el-form-item>

        <el-form-item label="二级英文类名" prop="enname_two">
            <el-input v-model="ruleForm.enname_two"></el-input>
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
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    console.log(this.ruleForm.enname_one)
                    if (/^[A-Za-z]+$/.test(this.ruleForm.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm.enname_two)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            return {
                ruleForm: {
                    cnname_one: "",
                    enname_one: "",
                    cnname_two: "",
                    enname_two: "",
                },
                rules: {
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _this = this
                        this.axios.post("/api/back_class/add_class_one", {
                            enname_one: _this.ruleForm.enname_one,
                            cnname_one: _this.ruleForm.cnname_one,
                            enname_two: _this.ruleForm.enname_two,
                            cnname_two: _this.ruleForm.cnname_two,
                        }).then(function (data) {
                            console.log(data)
                            if (data.data.code == 1014) {
                                console.log(_this.$message)
                                _this.$message({
                                    showClose: true,
                                    message: '恭喜你，数据插入成功',
                                    type: 'success'
                                });
                            } else {
                                _this.$message({
                                    message: '插入失败',
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
    h3 {
        margin: 20px 0 20px 40px;
    }

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

    input {
        width: 200px;
    }

    .el-input,
    .el-input__inner {
        width: 200px;
    }
</style>