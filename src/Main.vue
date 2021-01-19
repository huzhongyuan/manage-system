<template>
  <div class="Main">
    <el-container>
      <el-header>
        <header-component />
      </el-header>
      <el-container class="content-box">
        <el-aside width="200px">
          <aside-component />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Header form './components/Header'
import headerComponent from "./components/Header.vue";
import asideComponent from "./components/Aside";
export default {
  name: "Main",
  components: {
    headerComponent,
    asideComponent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@bggreen-color: #B32E2E;

.Main {
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @bggreen-color;
    height: 70px !important ;
  }
  .el-aside {
    height: 100%;
  }
  .content-box {
    position: absolute;
    top: 70px;
    left: 0px;
    right: 0;
    bottom: 0;
  }
}
</style>
