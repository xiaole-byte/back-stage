<!--
 * @Author: your name
 * @Date: 2021-02-20 14:30:50
 * @LastEditTime: 2021-02-21 18:53:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\后台管理系统\management\src\views\Home.vue
-->
<template>
  <el-container>
    <el-header>
      电商后台管理系统
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']" router="router">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>用户管理</template>
                 <el-menu-item index="/list">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>权限管理</template>
              <el-menu-item index="2-1">角色列表</el-menu-item>
              <el-menu-item index="2-2">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>商品管理</template>
              <el-menu-item index="3-1">商品列表</el-menu-item>
              <el-menu-item index="3-2">分类参数</el-menu-item>
              <el-menu-item index="3-3">商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order"></i>订单管理</template>
              <el-menu-item index="3-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"
              ><i class="el-icon-s-claim"></i>数据统计</template>
            <el-menu-item index="3-1">数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      router: true,
    }
  }
};
</script>

<style lang="less">
.el-container {
  .el-header {
    background-color: rgb(55, 61, 65);
    color: #fff;
    font-size: 16px;
    line-height: 60px;
    .el-button{
      float: right;
      margin-top: 10px;
    }
  }
  .el-menu {
    background-color: rgb(55, 61, 65);
  }
  .el-submenu__title {
    color: #fff;
  }
  .el-menu-item {
    color: #fff;
  }
  .el-main{
    background-color: rgb(234, 237, 241);
  }
}
</style>
