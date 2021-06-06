<template>
  <div class="content-admin">
    <div class="title">
      <div class="fff">司越官网后台管理</div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link fff">
            {{ userName }}<i class="el-icon-arrow-down el-icon--right fff"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-container class="el-container">
      <el-aside width="200px">
        <div>
          <el-menu
            :default-active="defaultRouter"
            class="el-menu-vertical-demo"
            background-color="#4a5259"
            text-color="#fff"
            router
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="admin">
              <template slot="title">
                <span>资讯管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="admintest">考试动态</el-menu-item>
                <el-menu-item index="adminpaln">招生计划</el-menu-item>
                <el-menu-item index="adminuniversities">招生院校</el-menu-item>
                <el-menu-item index="adminmajor">招生专业</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="admincar">轮播图管理</el-menu-item>
            <el-submenu index="admin">
              <template slot="title">
                <span>试题管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="specializedTraining"
                  >专项训练</el-menu-item
                >
                <el-menu-item index="themeYear">历年真题</el-menu-item>
                <el-menu-item index="simulationTest">模拟测试</el-menu-item>
                <el-menu-item index="examination">考试大纲</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      defaultRouter: "",
    };
  },
  created() {
    this.defaultRouter = this.$route.name;
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    out() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.content-admin {
  width: 100%;
  height: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    background-color: #6cdcc0;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    .item {
      color: #fff;
    }
  }
  .el-container {
    height: calc(100% - 50px);
    /deep/.el-menu {
      border: none;
    }
    /deep/.el-aside {
      background-color: #4a5259;
      > div {
        height: 100%;
      }
      .el-menu-item.is-active {
        background: #38a28a !important;
        color: #fff;
      }
    }
  }
}
</style>