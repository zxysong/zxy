<template>
  <div>
    <base-breadcrumb :list="touterList"></base-breadcrumb>
    <div class="content">
      <div>考试动态</div>
      <div>
        <el-button>添加动态</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50" align="center">
          </el-table-column>
          <el-table-column prop="date" label="标题" width="150" align="center">
          </el-table-column>
          <el-table-column prop="name" label="封面" minWidth="120">
          </el-table-column>
          <el-table-column prop="province" label="描述" minWidth="120">
          </el-table-column>
          <el-table-column prop="city" label="上传人" width="120">
          </el-table-column>
          <el-table-column prop="address" label="分类" width="120">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touterList: [{ name: "资讯管理" }, { name: "考试动态" }],
      tableData: [],
    };
  },
};
</script>