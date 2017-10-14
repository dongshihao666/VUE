<template>
    <div>
        <el-table :data="formData" border style="width: 70%" class="tabb" @row-dblclick="dbclick">

            <el-table-column label="标题" width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.title }}</span>
                </template>
            </el-table-column>

            <el-table-column label="前后端分类" width="180">
                <template scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <span style="margin-left: 10px">{{ scope.row.backorfont }}</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="日期" width="180">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="paga" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="nowPage"
            :page-sizes="[2, 5, 10, 15]" :page-size="everyrows" layout="total, sizes, prev, pager, next, jumper" :total="this.oldData.length">
        </el-pagination>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                oldData: [],
                formData: [],
                everyrows: 5,
                nowPage: 1
            }
        },
        created() {
            var type = this.$route.query.type;
            this.axios.get('/api/apilist/list?type=' + type).then((data) => {
                if (data.data.code == '2010') {
                    this.oldData = data.data.data;
                    this.formData = this.oldData.slice(0, this.everyrows);
                } else {
                }
            })
        },
        watch: {
            $route() {
                this.$router.go(0);
            }
        },
        methods: {
            
            dbclick(row) {
                console.log(row)
                this.$router.push({ name: 'portDetail', params: { data: row } })
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$router.push({ name: 'portDetail', params: { data: row } })
            },
            handleDelete(index, row) {
                console.log(index, row);
            }, 
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.formData = this.oldData.slice((this.nowPage - 1) * this.everyrows, this.everyrows);
                this.everyrows = val;
            },
            handleCurrentChange(val) {
                this.nowPage = val
                this.formData = this.oldData.slice((val - 1) * this.everyrows, this.everyrows * val);
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style scoped>

</style>