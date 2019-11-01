<template>
    <el-row class="student-list">
        <h1>学生列表</h1>
        <el-table :data="list" style="width: 96%" max-height="500" class='student-table'>
            <!-- <el-table-column prop="id" label="ID" width="150"></el-table-column> -->
            <el-table-column prop="xingming" label="姓名" width="100"></el-table-column>
            <el-table-column prop="imageUrl" label="图片" width="120">
                <template slot-scope="scope">
                    <img :src="'/api'+ scope.row.imageUrl" alt="" style='width:100%;'>
                </template>
            </el-table-column>
            <el-table-column prop="shenfenzheng" label="身份证" width="140"></el-table-column>
            <el-table-column prop="xuehao" label="学号" width="120"></el-table-column>
            <el-table-column prop="banji" label="班级" width="140"></el-table-column>
            <el-table-column prop="xueqi" label="学期" width="120"></el-table-column>
            <el-table-column prop="moban" label="末班生" width="80"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="deleteRow(scope)"
                            type="text"
                            size="small"
                    >移除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        created() {
            this.$store.dispatch("GETALL");
        },
        computed: {
            list() {
                var arr = [];
                arr = this.$store.state.list.map(item => {
                    if(item.moban){
                        item.moban = '是'
                    }else{
                        item.moban = '否'
                    }
                    return item
                });
                return arr;
            }
        },
        methods: {
            deleteRow(scope) {
                // console.log("删除的id:",scope.row.id);
                this.$store.dispatch("DEL",{
                    id: scope.row.id
                });
            }
        }
    };
</script>

<style scoped lang='stylus'>
    .student-list{
        h1{
            font-size 24px;
            width: 96%;margin 20px auto;
            font-weight: normal;
        }
        .student-table{
            border: 1px solid #eee;
            margin 0 auto;
        }
    }

</style>