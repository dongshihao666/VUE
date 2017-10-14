<template>
    <el-table :data="data" style="width: 800px;margin-top:30px;margin-left:30px;" :row-class-name="tableRowClassName">
        <el-table-column v-for="i in data" prop="i.article_name" label="标题" width="180"></el-table-column>
        <el-table-column prop="name" label="分类" width="180">
        </el-table-column>
        <el-table-column prop="address" label="作者">
        </el-table-column>
        <el-table-column prop="address" label="发布时间">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        methods: {
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            }
        },
        data() {
            return {
                data: null
            }
        },
        created() {
            var that = this;
            this.axios.get('/api/front_article/getArticleAll').then((data) => {
                if (data.data.code == '6012') {
                    // console.log(data.data.data)
                    this.data = data.data.data;
                    console.log(this.data)
                }
            })
        }
    }

</script>

<style>
    .el-table .info-row {
        background: #c9e5f5;
    }

    .el-table .positive-row {
        background: #e2f0e4;
    }
</style>