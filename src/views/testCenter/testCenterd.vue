<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot">{{ questionType }}</div>
      <div class="item">
        <p class="title">{{ rowData.previousTitle }}</p>
        <!-- <p>{{ rowData.context || rowData.description }}</p> -->
        <p v-for="item in rowData.contextPicUrlList" :key="item">
          <img :src="`http://47.96.139.20${item}`" alt="" />
        </p>
        <p class="person">
          {{ rowData.createdBy }}
          {{ rowData.publishTime || rowData.gmtCreated }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";
import { queryQuestionDetail, querySlideshow } from "@/http";
export default {
  data() {
    return {
      titleLeft: {
        title: "试题中心",
        enTitle: "Test center",
      },
      imgs: [],
      curId: "",
      questionType: "",
      rowData: {},
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
  created() {
    this.curId = this.$route.query.id;
    this.questionType = this.$route.query.questionType;
    this.queryList();
    this.queryListPic();
  },
  methods: {
    async queryListPic() {
      let res = await querySlideshow({});
      if (res.entry) {
        this.imgs = res.entry;
      }
    },
    async queryList() {
      let p = {
        questionId: this.curId,
        questionType: this.questionType,
      };
      let res = await queryQuestionDetail(p);
      this.rowData = Object.assign({}, res.entry);
    },
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
    padding: 10px;
    border-top: 1px solid #eee;
    .title {
      text-align: center;
      font-size: 18px;
      padding-bottom: 20px;
      padding-top: 20px;
    }
    .person {
      text-align: right;
      padding-top: 20px;
      color: #999;
    }
    img {
      width: 100%;
    }
  }
}
.pagination {
  text-align: right;
  padding-right: 74px;
  margin-bottom: 30px;
}
</style>