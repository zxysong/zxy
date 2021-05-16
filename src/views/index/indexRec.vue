<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">名师推荐</p>
        <p class="left-tip">Teacher recommendation</p>
      </div>
      <div class="right"></div>
    </div>
    <div class="content">
      <base-carousel></base-carousel>
    </div>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
export default {
  data() {
    return {};
  },
  components: {
    baseCarousel,
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
  padding: 64px;
  padding-bottom: 16px;
  padding-top: 20px;
}
</style>