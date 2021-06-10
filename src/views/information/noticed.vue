<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot">开课公告详情</div>
      <div class="item">
        <p class="title">{{ rowData.title }}</p>
        <p>{{ rowData.context }}</p>
        <p class="person">{{ rowData.createdBy }} {{ rowData.publishTime }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";
import { queryByIdExam, queryListPic } from "@/http";
export default {
  data() {
    return {
      titleLeft: {
        title: "专升本资讯",
        enTitle: "Upgrade Information",
      },
      imgs: [],
      curId: "",
      rowData: {},
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
  created() {
    this.curId = this.$route.query.id;
    this.queryList();
    this.queryListPic();
  },
  methods: {
    async queryList() {
      let p = {
        id: this.curId,
      };
      let res = await queryByIdExam(p);
      this.rowData = Object.assign({}, res.entry);
    },
    async queryListPic() {
      let res = await querySlideshow({});
      if (res.entry) {
        this.imgs = res.entry;
      }
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