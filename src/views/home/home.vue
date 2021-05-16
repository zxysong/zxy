<template>
  <div>
    <div class="header">
      <div class="left">司越教育</div>
      <div class="right">
        <div class="item">
          <router-link
            :to="'index'"
            :class="{ active: $route.path.includes('/home/index') }"
            >首页</router-link
          >
        </div>
        <div class="height"></div>
        <div class="item" style="padding: 0; cursor: pointer">
          <!-- <router-link
            :to="'information'"
            :class="{ active: $route.path.includes('/home/information') }"
            >专升本资讯</router-link
          > -->
          <el-dropdown>
            <div>专升本资讯</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goDetailed('hot')"
                >热门推荐</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('notice')"
                >开课公告</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('preparation')"
                >备考咨讯</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('plan')"
                >招生计划</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('universities')"
                >招生院校</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('major')"
                >招生专业</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="height"></div>
        <div class="item">
          <router-link :to="'index2'">辅导课堂</router-link>
        </div>
        <div class="height"></div>
        <div class="item">
          <router-link :to="'index3'">试题中心</router-link>
        </div>
        <div class="height"></div>
        <div class="item">
          <router-link :to="'index4'">关于我们</router-link>
        </div>
      </div>
    </div>
    <div style="min-height: 400px">
      <router-view />
    </div>
    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseFooter from "@/components/baseFooter";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    BaseFooter,
  },
  methods: {
    goDetailed(type) {
      this.$router.push({
        path: `${type}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
}
.left,
.right {
  display: inline-block;
  padding: 38px 0;
}
.right {
  display: flex;
}
.item {
  margin: 0 30px;
  color: #535553;
}
.active {
  color: #51a3f6;
}
.height {
  height: 21px;
  width: 1px;
  background: #757775;
}
</style>