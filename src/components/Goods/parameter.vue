<template>
  <div class="parameter">
    <!-- 商品分类 -->
    <el-button
      type="primary"
      style="margin-bottom: 20px"
      @click="dialogFormVisible = true"
      >添加分类</el-button
    >
    <el-table
      :data="list"
      style="width: 100%"
      row-key="cat_id"
      border
      lazy
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column label="#" type="index" width="50"></el-table-column>
      <el-table-column prop="cat_name" label="分类名称" width="180">
      </el-table-column>
      <el-table-column label="是否有效" width="180">
        <i class="el-icon-circle-check" style="color: green"></i>
      </el-table-column>
      <el-table-column prop="cat_level" label="排序"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" size="mini"
          >编辑</el-button
        >
        <el-button type="danger" icon="el-icon-delete" size="mini"
          >删除</el-button
        >
      </el-table-column>
    </el-table>
    <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" required :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" :label-width="formLabelWidth">
          <el-cascader style="width:100%"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { parameter } from "./../../assets/http/goods_http";
export default {
  props: {},
  data() {
    return {
      list: [
        {
          cat_id: 1,
          cat_name: "大家电",
          cat_pid: 0,
          cat_level: 0,
          cat_deleted: false,
          children: [
            {
              cat_id: 3,
              cat_name: "电视",
              cat_pid: 1,
              cat_level: 1,
              cat_deleted: false,
              children: [
                {
                  cat_id: 6,
                  cat_name: "曲面电视",
                  cat_pid: 3,
                  cat_level: 2,
                  cat_deleted: false,
                },
                {
                  cat_id: 7,
                  cat_name: "海信",
                  cat_pid: 3,
                  cat_level: 2,
                  cat_deleted: false,
                },
              ],
            },
          ],
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    // 商品分类
    parameter().then((res) => {
      this.list = res;
      console.log(this.list);
    });
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
.parameter {
  background: white;
  padding: 20px;
  .block {
    margin-top: 20px;
  }
}
</style>
