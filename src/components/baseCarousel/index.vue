<template>
  <div>
    <el-carousel :interval="interval" arrow="always">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: {
    imgs: {
      default: () => [],
    },
    interval: {
      type: Number,
      default: 50000,
    },
    arrow: {
      type: String,
      default: "always",
    },
  },
  data() {
    return {};
  },
};
</script>