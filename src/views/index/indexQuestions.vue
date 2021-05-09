<template>
  <div class="index-major">
    <div class="title">
      <div class="left">
        <p class="left-title">最新试题</p>
        <p class="left-tip">Latest Test Questions</p>
      </div>
      <div class="right">
        <div class="right-tab base-pointer active">高等数学</div>
        <div class="right-tab base-pointer">大学语文</div>
        <div class="right-tab base-pointer">大学英语</div>
        <div class="right-tab base-pointer">历年真题</div>
      </div>
    </div>
    <div class="content">
      <div v-for="item in 8" :key="item" class="item">
        <div style="padding: 20px">
          <img src="../../assets/imgs/3.png" alt="" />
        </div>
        <div class="plan">浙江专升本高等数学</div>
        <div class="time">选择题（一）</div>
      </div>
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
.index-major {
  background: #f5f5f5;
}
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
      width: 25%;
      text-align: right;
    }
    .active {
      color: #51a3f6;
    }
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  padding: 64px;
  padding-bottom: 16px;
  padding-right: 0;
  .item {
    width: 12%;
    margin-bottom: 20px;
    // background: #fff;
    margin-right: 50px;
    img {
      width: 100%;
    }
    .plan {
      text-align: center;
      font-size: 14px;
      color: #535553;
    }
    .time {
      text-align: center;
      color: #757775;
      font-size: 12px;
      padding-left: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>