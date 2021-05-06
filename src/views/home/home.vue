<template>
  <div>
    <div class="header">
      <div class="left">司越教育</div>
      <div class="right">
        <div class="item active">首页</div>
        <div class="height"></div>
        <div class="item">专升本资讯</div>
        <div class="height"></div>
        <div class="item">辅导课堂</div>
        <div class="height"></div>
        <div class="item">试题中心</div>
        <div class="height"></div>
        <div class="item">关于我们</div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
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