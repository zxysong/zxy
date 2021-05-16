<template>
  <div class="title" :class="{ 'border-btm': hasBorder }">
    <div class="left">
      <p class="left-title">{{ titleLeft.title }}</p>
      <p class="left-tip">{{ titleLeft.enTitle }}</p>
    </div>
    <div class="right">
      <div
        class="right-tab base-pointer"
        :class="{ active: active === i }"
        v-for="(item, i) in tabs"
        :key="i"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titleLeft: {
      required: true,
      type: Object,
    },
    tabs: {
      type: Array,
      default: () => [],
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  padding: 0 64px;
  height: 140px;
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
.border-btm {
  border-bottom: 1px solid #bbb;
}
</style>