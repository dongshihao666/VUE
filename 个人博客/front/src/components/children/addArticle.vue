<template>

    <div class="sec">
        <h2>增加文章</h2>
        <div class="one">
            <label for="qq">文章标题</label>
            <el-input required="required" id="qq" class="title" v-model="input" placeholder="请输入内容"></el-input>
        </div>

        <div class="two">
            <label>一级类名</label>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="three">
            <label>二级类名</label>
            <el-select v-model="values" placeholder="请选择">
                <el-option v-for="item in optiones" :key="item.values" :label="item.labels" :value="item.values">
                </el-option>
            </el-select>
        </div>

        <div class="four">
            <label>是否显示</label>
            <el-radio-group v-model="radio2">
                <el-radio :label="3">是</el-radio>
                <el-radio :label="6">否</el-radio>
            </el-radio-group>
        </div>

        <div class="five">
            <label>是否推荐</label>
            <el-radio-group v-model="radio3">
                <el-radio :label="3">是</el-radio>
                <el-radio :label="6">否</el-radio>
            </el-radio-group>
        </div>

        <div class="six">
            <label for="ww">作者</label>
            <el-input required="required" id="ww" class="title" v-model="input" placeholder="请输入内容"></el-input>
        </div>

        <div class="seven">
            <label for="ww">导读</label>
            <el-input class="read" type="textarea" autosize placeholder="请输入内容" v-model="textarea2">
            </el-input>
        </div>

        <div class="eight">
            <label for="ww">时间</label>
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
            </el-input>
        </div>

        <div class="nine">
            <el-button type="primary">提交</el-button>
            <el-button type="reset">重置</el-button>
        </div>

    </div>

</template>

<script>
    export default {
        name: "addArticle",
        data() {
            return {
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                textarea2: '',
                radio2: 2,
                radio3: 2,
                input: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                optiones: [{
                    values: '选项1',
                    labels: '黄金糕'
                }, {
                    values: '选项2',
                    labels: '双皮奶'
                }, {
                    values: '选项3',
                    labels: '蚵仔煎'
                }, {
                    values: '选项4',
                    labels: '龙须面'
                }, {
                    values: '选项5',
                    labels: '北京烤鸭'
                }],
                value: '',
                values: ''
            }
        }
    }
</script>
<style scoped>
    .sec {
        padding-left: 20px;
    }

    .sec>h2 {
        padding: 20px 20px;
    }
    .one,
    .two,
    .three,
    .four,
    .five,
    .six,
    .seven,
    .eight,
    .nine {
        margin: 10px 0;
        padding-left: 100px;
    }

    .four,
    .five,
    .six,
    .nine {
        padding-top: 20px;
    }

    .title,
    .read {
        width: 600px;
    }
</style>