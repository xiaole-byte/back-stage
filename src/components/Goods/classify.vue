<!--
 * @Author: your name
 * @Date: 2021-02-21 19:03:44
 * @LastEditTime: 2021-02-21 19:07:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\后台管理系统\management\src\components\Goods\classify.vue
-->
<template>
  <div class="classify">
    <!-- 商品分类 -->
    <div style="margin-bottom: 20px">
      <el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" style="margin-left: 20px">添加商品</el-button>
    </div>

    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
    };
  },
  created() {
    // 商品列表
    // parameter().then((res) => {
    //   this.list = res;
    //   console.log(this.list);
    // });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.classify {
  background: white;
  padding: 20px;
}
.el-select .el-input {
  width: 150px;
}
.el-input-group {
  width: 500px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>