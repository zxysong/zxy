<template>
  <div>
    <base-breadcrumb :list="touterList"></base-breadcrumb>
    <div class="content">
      <div style="padding-top: 28px">考试大纲</div>
      <div class="clear">
        <el-button size="small" class="fr btn" @click="addtest"
          >添加考试大纲</el-button
        >
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50" align="center">
          </el-table-column>
          <el-table-column
            prop="previousTitle"
            label="标题"
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="coverPicUrl" label="封面" width="200">
            <template slot-scope="scope">
              <img
                height="100px"
                :src="`http://47.96.139.20${scope.row.coverPicUrl}`"
                alt=""
              />
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述" minWidth="120">
          </el-table-column>
          <el-table-column prop="createdBy" label="上传人" width="120">
          </el-table-column>
          <el-table-column prop="subjectType" label="分类" width="120">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <div style="display: flex">
                <el-button
                  @click="handleEdit(scope.row)"
                  type="text"
                  size="small"
                  class="edit-btn"
                  >编辑</el-button
                >
                <el-button
                  @click="handledelete(scope.row)"
                  type="text"
                  size="small"
                  class="delete-btn"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 50, 100, 200]"
          :page-size="pageSize"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { queryQuestionListByType, deleteQuestionInfo } from "@/http";
import { mapMutations } from "vuex";
import mixins from "@/mixins/table";
export default {
  mixins: [mixins],
  data() {
    return {
      touterList: [{ name: "试题管理" }, { name: "考试大纲" }],
    };
  },
  mounted() {
    this.queryList();
  },
  methods: {
    ...mapMutations(["setAddQuestion", "clearAddQuestion"]),
    addtest() {
      this.clearAddQuestion();
      this.$router.push({
        path: "addexamination",
      });
    },
    async queryList() {
      let p = {
        questionType: "考试大纲",
        page: this.currentPage,
        pageSize: this.pageSize,
      };
      let res = await queryQuestionListByType(p);
      this.totals = res.totalRecordSize || 0;
      this.tableData = res.entry || [];
    },
    handledelete(row) {
      deleteQuestionInfo({ ids: row.id })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          this.queryList();
        });
    },
    handleEdit(row) {
      if (row.contextPicUrlList) {
        row.contextPicUrlList = row.contextPicUrlList.join(",");
      }
      this.setAddQuestion(row);
      this.$router.push({
        path: "addexamination",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  text-align: right;
  text-align: right;
  padding-right: 0;
  margin-bottom: 30px;
  margin-top: 18px;
}
.btn {
  background-color: #38a28a;
  color: #fff;
  margin-bottom: 18px;
}
</style>