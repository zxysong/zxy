<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot">最新试题-{{ curType }}</div>
      <div
        v-for="item in tableData"
        :key="item.id"
        class="item"
        @click="toDetailed(item)"
      >
        <div class="left">
          {{ item.previousTitle }}
        </div>
        <div class="right">{{ item.publishTime || item.gmtCreated }}</div>
      </div>
    </div>
    <el-pagination
      background
      layout="total,prev, pager, next"
      class="pagination"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="pageSize"
      :total="totals"
    >
    </el-pagination>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";
import tableMethods from "@/mixins/table";
import { queryQuestionListByType, querySlideshow } from "@/http";
export default {
  mixins: [tableMethods],
  data() {
    return {
      titleLeft: {
        title: "试题管理",
        enTitle: "Test Questions",
      },
      pageSize: 10,
      imgs: [],
      curType: "",
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
  created() {
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
          page: 1,
          pageSize: 10,
          questionType: "历年真题",
        };
      } else {
        p = {
          page: 1,
          pageSize: 10,
          questionType: "专项练习",
          subjectType: this.curType,
        };
      }
      let res = await queryQuestionListByType(p);
      this.totals = res.totalRecordSize || 0;
      this.tableData = res.entry || [];
    },
    toDetailed(row) {
      this.$router.push({
        path: "/home/subjectTyped",
        query: {
          id: row.id,
          type: this.curType,
        },
      });
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