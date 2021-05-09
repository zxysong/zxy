<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">辅导课堂</p>
        <p class="left-tip">Tutoring Class</p>
      </div>
      <div class="right">
        <div class="right-tab base-pointer active">全日制协议班</div>
        <div class="right-tab base-pointer">至尊VIP保过班</div>
        <div class="right-tab base-pointer">SVIP保过班</div>
      </div>
    </div>
    <div class="content">
      <div v-for="item in headList" :key="item" class="item">
        {{ item }}
      </div>
      <div v-for="(item, index) in headList1" :key="index" class="item">
        <template v-if="item.children">
          <div v-for="o in item.children" :key="o" class="color">
            {{ o }}
          </div>
        </template>

        <div v-if="item.name" class="color">{{ item.name }}</div>
      </div>
      <div v-for="item in headList2" :key="item" class="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headList: ["学习阶段", "教学安排", "授课方式", "备注", "咨询报名"],
      headList1: [
        { name: "学习阶段1" },
        { children: ["111111", "2222", "33333"] },
        { name: "授课方式1" },
        { name: "备注1" },
        { name: "咨询报名1" },
      ],
      headList2: ["学习阶段2", "教学安排2", "授课方式2", "备注2", "咨询报名2"],
    };
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
}
</style>