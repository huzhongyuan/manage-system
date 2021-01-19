<template>
  <div class="header">
      <div class="title">
        设备管理系统
      </div>
      <div class="actions">
          <div class="name">
              admin
          </div>
          <div>|</div>
          <div class="out" @click="to_login()">
              注销
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods: {
      to_login(){
        this.$router.push({ path: "/" });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@hover-color: rgba(255, 255, 255, 0.8);
    .header {
        color: white;
        font-family:  "Helvetica Neue", Arial, "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "WenQuanYi Micro Hei", SimSun, sans-serif;
        font-weight: 800;
        font-size: 24px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .actions {
            display: flex;
            font-size: 16px;
            > div {
                display: flex;
                align-items: center;
                margin-right: 10px;
            }
            .out:hover {
                color: @hover-color;
            }
            // .name {
            //   cursor: pointer;
            // }
            .out {
                cursor: pointer;
            }
        }
    }
</style>
