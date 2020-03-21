<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: #545c64">
      <el-menu
        :default-openeds="['1', '3']"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height:100vh;text-align:left;"
      >
        <el-menu-item index="index">
           <template slot="title">
            <i class="el-icon-s-home"></i><span>首页</span>
          </template>
        </el-menu-item>
         <el-menu-item index="personal">
           <template slot="title">
            <i class="el-icon-s-home"></i><span>个人中心</span>
          </template>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px;background:#fff;height:40px;line-height:40px;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{userInfo.name}}</span>
      </el-header>
      <el-main style="backgroun:#F5F7F9;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInfo:{name:"Demo"}
    };
  },
  methods: {},
  created() {
    console.log(this.$store.state)
  },
  mounted() {}
};
</script>
<style>
.el-main{
  background: #F5F7F9;
}
</style>