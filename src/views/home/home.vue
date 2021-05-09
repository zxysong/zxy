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
        <div class="item">
          <router-link
            :to="'information'"
            :class="{ active: $route.path.includes('/home/information') }"
            >专升本资讯</router-link
          >
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
  padding: 0 30px;
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