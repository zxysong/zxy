<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :key="item.name">
        <a href="/admin" v-if="item.router">活动管理</a>
        <span v-else>{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>