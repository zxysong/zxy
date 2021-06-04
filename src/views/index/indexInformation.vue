<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">专升本资讯</p>
        <p class="left-tip">Upgrade Information</p>
      </div>
      <div class="right">
        <div
          class="right-tab base-pointer"
          @click="tabChange('HOT_RECOMMEND')"
          :class="{ active: type === 'HOT_RECOMMEND' }"
        >
          热门推荐
        </div>
        <div
          class="right-tab base-pointer"
          :class="{ active: type === 'COURSE_ANNOUNCEMENT' }"
          @click="tabChange('COURSE_ANNOUNCEMENT')"
        >
          开课公告
        </div>
        <div
          class="right-tab base-pointer"
          :class="{ active: type === 'PREPARE_FOR_INFORMATION' }"
          @click="tabChange('PREPARE_FOR_INFORMATION')"
        >
          备考资讯
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img src="../../assets/imgs/4.png" alt="" />
        <div class="plan">
          <div>浙江省2021年普通高校专升本招生计划</div>
          <div class="arrow el-icon-arrow-right"></div>
        </div>
        <div class="time-line">
          <div class="time">
            <div>2021年</div>
            <div>05.06</div>
          </div>
          <div class="line"></div>
          <div class="detailed">
            这是具体的浙江省2021年普通高校专升本招生计划，这是具体的浙江省2021年普通高校专升本招生计划
          </div>
        </div>
      </div>
      <div class="right">
        <div
          class="item base-pointer"
          v-for="(item, index) in tabList"
          :key="item.id"
        >
          <div>
            <span
              class="circle"
              :style="{ background: index > 2 ? '#757775' : '#ee7435' }"
              >{{ `0${index + 1}` }}</span
            >
            <span class="info over-hidden">{{ item.title }}</span>
          </div>
          <div class="info-time">{{ item.publishTime }}</div>
        </div>
        <div class="more base-pointer" @click="toDetaiiled">查看更多></div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryexamList } from "@/http";
export default {
  data() {
    return {
      tabList: [],
      type: "",
    };
  },
  created() {
    this.tabChange("HOT_RECOMMEND");
  },
  methods: {
    async tabChange(examType) {
      this.type = examType;
      let p = {
        page: 1,
        pageSize: 10,
        examType,
      };
      let res = await queryexamList(p);
      if (res.entry) {
        this.tabList = res.entry;
      }
    },
    toDetaiiled() {
      if (this.type === "HOT_RECOMMEND") {
        this.$router.push({
          path: "/home/hot",
        });
      } else if (this.type === "COURSE_ANNOUNCEMENT") {
        this.$router.push({
          path: "/home/notice",
        });
      } else if (this.type === "PREPARE_FOR_INFORMATION") {
        this.$router.push({
          path: "/home/preparation",
        });
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
  padding: 64px;
  .left {
    width: 50%;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
    .plan {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      padding-bottom: 30px;
      & > div {
        color: #535553;
      }
      .arrow {
        border-radius: 50%;
        background: #7d7d7d;
        width: 22px;
        height: 22px;
        padding-left: 3px;
        color: #fff;
        padding-top: 2px;
      }
    }
    .time-line {
      display: flex;
      .time,
      .detailed,
      .line {
        display: flex;
        color: #757775;
      }
      .time {
        width: 80px;
        flex-direction: column;
        justify-content: space-between;
        & > div {
          color: #757775;
        }
      }
      .detailed {
        padding-left: 20px;
        width: 80%;
        font-size: 14px;
      }
      .line {
        width: 1px;
        height: 60px;
        background: #bbb;
      }
    }
  }
  .right {
    width: 50%;
    display: inline-block;
    vertical-align: top;
    padding-left: 30px;
    .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      .circle {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        // background: #ee7435;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .info {
        margin-left: 16px;
        font-size: 14px;
        color: #757775;
        max-width: 80%;
      }
      .info-time {
        font-size: 14px;
        color: #757775;
      }
    }
    .more {
      color: #51a3f6;
      text-align: right;
      font-size: 14px;
    }
  }
}
</style>