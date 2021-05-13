<template>
  <div class="index-major">
    <div class="title">
      <div class="left">
        <p class="left-title">院校专业</p>
        <p class="left-tip">College Major</p>
      </div>
      <div class="right">
        <div class="right-tab base-pointer active">招生院校</div>
        <div class="right-tab base-pointer">招生专业</div>
        <div class="right-tab base-pointer">招生计划</div>
      </div>
    </div>
    <div class="content">
      <div v-for="item in 8" :key="item" class="item">
        <img src="../../assets/imgs/4.png" alt="" />
        <div class="plan">
          <span>杭州电子科技大学</span>
          <span class="arrow el-icon-arrow-right"></span>
        </div>
        <div class="time">2021.05.06</div>
      </div>
    </div>
    <div class="more base-pointer">查看更多</div>
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
       margin-top: 12px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 64px;
  padding-bottom: 16px;
  .item {
    width: 22%;
    margin-bottom: 20px;
    background: #fff;
    img {
      width: 100%;
    }
    .plan {
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      padding-left: 8px;
      & > div {
        color: #101010;
      }
      .arrow {
        border-radius: 50%;
        background: #fff;
        width: 22px;
        height: 22px;
        padding-left: 3px;
        color: #ccc;
        padding-top: 2px;
        border: 1px solid #ccc;
      }
    }
    .time {
      color: #757775;
      font-size: 14px;
      padding-left: 8px;
      padding-bottom: 8px;
    }
  }
}
.more {
  color: #51a3f6;
  text-align: right;
  font-size: 14px;
  padding-right: 64px;
  padding-bottom: 16px;
}
</style>