<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot">最新试题详情</div>
      <div class="item">
        <p class="title">{{ rowData.previousTitle }}</p>
        <p>{{ rowData.context || rowData.description }}</p>
        <p class="person">{{ rowData.createdBy }} {{ rowData.publishTime }}</p>
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
        title: "试题管理",
        enTitle: "Test Questions",
      },
      imgs: [],
      curId: "",
      rowData: {},
      curType: "",
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
  created() {
    this.curId = this.$route.query.id;
    this.curType = this.$route.query.type;
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
      let p;
      if (this.curType === "历年真题") {
        p = {
          questionId: this.curId,
          questionType: "历年真题",
        };
      } else {
        p = {
          questionId: this.curId,
          questionType: "专项练习",
          subjectType: this.curType,
        };
      }
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
  }
}
.pagination {
  text-align: right;
  padding-right: 74px;
  margin-bottom: 30px;
}
</style>