<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="hot hot-bor">招生计划详情</div>
      <div v-for="item in tableData" :key="item.id" class="item">
        <div class="left">
          {{ item.enrollmentTitle }}
        </div>
        <div class="right">{{ item.publishTime }}</div>
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
import { queryEnrollmentList, querySlideshow } from "@/http";
export default {
  mixins: [tableMethods],
  data() {
    return {
      titleLeft: {
        title: "专升本资讯",
        enTitle: "Upgrade Information",
      },
      pageSize: 10,
      imgs: [],
    };
  },
  components: {
    baseCarousel,
    baseTitle,
  },
  created() {
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
        enrollmentType: "ENROLLMENT_PLAN",
        page: this.currentPage,
        pageSize: this.pageSize,
      };
      let res = await queryEnrollmentList(p);
      this.totals = res.totalRecordSize || 0;
      this.tableData = res.entry || [];
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
  .hot-bor {
    display: inline-block;
    border-bottom: 1px solid #ee7435;
    padding-bottom: 10px;
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