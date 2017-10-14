<template>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div>一级类名选择</div>

        <el-form-item label="中文类名" prop="oneId">
            <el-select v-model="ruleForm.oneId" placeholder="请选择">
                <el-option v-for="item in datas" :label="item.cnname" :value="item.id"></el-option>
            </el-select>
        </el-form-item>

        <div>二级类名设置</div>
        <el-form-item label="中文类名" prop="cnname_two">
            <el-input v-model="ruleForm.cnname_two"></el-input>
        </el-form-item>

        <el-form-item label="英文类名" prop="enname_two">
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
            return {
                ruleForm: {
                    oneId: "",
                    cnname_two: "",
                    enname_two: "",
                },
                datas:[],
                rules: {
                    oldId: [
                        { required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    cnname_two: [
                        { required: true, message: '请输入', trigger: 'change' }
                    ],
                    enname_two: [
                        { required: true, message: '请输入', trigger: 'change' }
                    ]
                }
            }
        },
        created() {
            var that=this;
            this.axios.get("/api/back_class/select_one_class").then(function (data) {
                that.datas=data.data.data
            })
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _this = this
                        this.axios.post("/api/back_class/add_two_class", {
                            oneId:this.ruleForm.oneId,
                            enname_two:this.ruleForm.enname_two,
                            cnname_two:this.ruleForm.cnname_two
                        }).then(function (data) {
                            console.log(data.data)
                            if (data.data.code == 1032) {
                                // console.log(_this.$message)
                                _this.$message({
                                    showClose: true,
                                    message: '添加成功',
                                    type: 'success'
                                })
                            } else {
                                _this.$message({
                                    message: '提交失败',
                                    type: 'error'
                                })
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