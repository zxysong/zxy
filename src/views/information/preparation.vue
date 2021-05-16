<template>
  <div>
    <base-carousel></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot">考试动态——备考资讯</div>
      <div v-for="item in 10" :key="item" class="item">
        <div class="left">
          我是内容我是内容关于浙江司越专升本课程价格调整的通知
        </div>
        <div class="right">2021年5月2日</div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";
export default {
  data() {
    return {
      titleLeft: {
        title: "专升本资讯",
        enTitle: "Upgrade Information",
      },
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 32px 64px;
  .hot {
    color: #757775;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #eee;
    .left {
      flex: 1;
      font-size: 14px;
      color: #757775;
    }
    .right {
      width: 200px;
      text-align: right;
      font-size: 14px;
      color: #757775;
    }
  }
}
.pagination {
  text-align: right;
  padding-right: 74px;
  margin-bottom: 30px;
}
</style>