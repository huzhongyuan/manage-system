<template>
  <div class="aside-box">
    <el-menu
      default-active="/index"
      class="el-menu-vertical-demo"
      @select="selectMenu"
      :router="true"
    >
      <el-menu-item index="/index" >
        <i class="el-icon-menu"></i>
        <span slot="title">设备列表</span>
      </el-menu-item>
      <!-- <el-menu-item index="/index/statistics" >
        <i class="el-icon-document" ></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <el-menu-item index="/index/usermanagement" >
        <i class="el-icon-setting" ></i>
        <span slot="title">用户管理</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
      selectMenu(index, indexPath) {
          console.log(index, indexPath)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.aside-box {
  position: relative;
  height: 100%;
  .el-menu-item.is-active {
    color: #B32E2E;
  }
}
.el-menu {
  position: relative;
  height: 100%;
}
</style>
