<template>

    <div>
        <el-table :data="tableData" border style="width: 60%" class="tabb">
            <el-table-column label="标题" width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="前后端分类" width="180">
                <template scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </div>
                </template>
            </el-table-column>
            <el-table-column label="日期" width="180">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="paga" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]"
            :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    </div>



</template>
<script>
    export default {
        data() {
            return {
                currentPage4: 4,
                tableData: [{
                    name: 'back',
                    date: '2016-05-01',
                }, {
                    name: 'back',
                    date: '2016-05-01',
                },{
                    name: 'back',
                    date: '2016-05-01',
                },{
                    name: 'back',
                    date: '2016-05-01',
                },]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style scoped>
    .tabb,.paga {
        margin-left: 200px;
        margin-top: 50px;
    }
</style>