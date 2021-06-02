<template>
  <div>
    <base-breadcrumb :list="touterList"></base-breadcrumb>
    <div class="content">
      <div style="padding-top: 28px">招生院校</div>
      <div class="clear">
        <el-button size="small" class="fr btn" @click="addtest"
          >添加院校</el-button
        >
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50" align="center">
          </el-table-column>
          <el-table-column
            prop="enrollmentTitle"
            label="标题"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="coverPicUrl" label="封面" width="160">
            <template slot-scope="scope">
              <img :src="scope.row.coverPicUrl" alt="" />
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述" minWidth="120">
          </el-table-column>
          <el-table-column prop="context" label="动态内容" minWidth="120">
            <template slot-scope="scope">
              <el-popover
                trigger="hover"
                placement="top"
                width="800"
                class="popper-class"
              >
                <p>{{ scope.row.context }}</p>
                <div slot="reference" class="name-wrapper">
                  <p style="width: 100%; height: 100px">
                    {{ scope.row.context }}
                  </p>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="publishTime" label="时间" width="160">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
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
        <img
          src="http://47.96.139.20:8200/adult-exam/exam/myproject/image/exam/fa17f89d914c4f3b86083af395c5adc0.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { queryEnrollmentList, deleteEnrollment } from "@/http";
import { mapMutations } from "vuex";
import mixins from "@/mixins/table";
export default {
  mixins: [mixins],
  data() {
    return {
      touterList: [{ name: "资讯管理" }, { name: "招生院校" }],
    };
  },
  mounted() {
    this.queryList();
  },
  methods: {
    ...mapMutations(["setAddTest", "clearAddTest"]),
    addtest() {
      this.clearAddTest();
      this.$router.push({
        path: "adminuniversities",
      });
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
    handledelete(row) {
      deleteEnrollment({ ids: row.id })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          this.queryList();
        });
    },
    handleEdit(row) {
      this.setAddTest(row);
      this.$router.push({
        path: "adminuniversities",
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