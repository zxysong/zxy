<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">专升本资讯</p>
        <p class="left-tip">Upgrade Information</p>
      </div>
      <div class="right">
        <div class="right-tab active">热门推荐</div>
        <div class="right-tab">开课公告</div>
        <div class="right-tab">备考资讯</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img src="../../assets/imgs/4.png" alt="" />
        <div></div>
      </div>
      <div class="right">2</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  padding: 0 64px;
  height: 140px;
  border-bottom: 1px solid #bbb;
  .left {
    width: 50%;
    padding-top: 40px;
    .left-title {
      font-size: 32px;
    }
    .left-tip {
      // padding-left: 40px;
      color: #aeaeae;
    }
  }
  .right {
    width: 50%;
    padding-top: 66px;
    .right-tab {
      display: inline-block;
      width: 33%;
      text-align: right;
    }
    .active {
      color: #51a3f6;
    }
  }
}
.content {
  padding: 64px;
  .left {
    width: 50%;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
  }
  .right {
    width: 50%;
    display: inline-block;
  }
}
</style>