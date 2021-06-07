<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">辅导课堂</p>
        <p class="left-tip">Tutoring Class</p>
      </div>
      <div class="right">
        <div
          class="right-tab base-pointer"
          @click="tabChange('追光计划')"
          :class="{ active: type === '追光计划' }"
        >
          追光计划
        </div>
        <div
          class="right-tab base-pointer"
          @click="tabChange('巅峰计划X')"
          :class="{ active: type === '巅峰计划X' }"
        >
          巅峰计划X
        </div>
        <div
          class="right-tab base-pointer"
          @click="tabChange('蝶变计划')"
          :class="{ active: type === '蝶变计划' }"
        >
          蝶变计划A&B
        </div>
      </div>
    </div>
    <div class="content">
      <el-table :data="tabList" border style="width: 100%">
        <el-table-column
          prop="studyStage"
          label="学习阶段"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="teachingArrangement"
          label="教学安排"
          minWidth="200"
        >
        </el-table-column>
        <el-table-column prop="teachingMethod" label="授课方式" width="160">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="160">
        </el-table-column>
        <el-table-column prop="telephone" label="咨询报名" width="160">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { queryTutorongClass } from "@/http";
export default {
  data() {
    return {
      type: "",
      tabList: [],
    };
  },
  created() {
    this.tabChange("追光计划");
  },
  methods: {
    async tabChange(className) {
      this.type = className;
      let p = {
        page: 1,
        pageSize: 10,
        className,
      };
      let res = await queryTutorongClass(p);
      if (res.entry) {
        this.tabList = res.entry;
      } else {
        this.tabList = [];
      }
    },
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
  .item {
    width: 20%;
    border-top: 1px solid #bbb;
    border-left: 1px solid #bbb;
    &:nth-of-type(5n) {
      border-right: 1px solid #bbb;
    }
    &:nth-of-type(n + 11) {
      border-bottom: 1px solid #bbb;
    }
    &:nth-of-type(-n + 5) {
      color: #535553;
      font-weight: bold;
      font-size: 16px;
      padding: 16px 0;
      text-align: center;
    }
    &:nth-of-type(n + 6) {
      color: #757775;
      font-size: 12px;
      padding: 10px 0;
      text-align: center;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:nth-of-type(7n + 7) {
      color: red;
      font-size: 12px;
      padding: 10px 0;
      text-align: center;
    }
    .color {
      color: #757775;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  /deep/.el-table {
    .el-table__body {
      .cell {
        font-size: 14px;
      }
    }
  }
}
</style>