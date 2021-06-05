<template>
  <div class="index-major">
    <div class="title">
      <div class="left">
        <p class="left-title">最新试题</p>
        <p class="left-tip">Latest Test Questions</p>
      </div>
      <div class="right">
        <div
          class="right-tab base-pointer"
          @click="tabChange('高等数学')"
          :class="{ active: type === '高等数学' }"
        >
          高等数学
        </div>
        <div
          class="right-tab base-pointer"
          @click="tabChange('大学语文')"
          :class="{ active: type === '大学语文' }"
        >
          大学语文
        </div>
        <div
          class="right-tab base-pointer"
          @click="tabChange('大学英语')"
          :class="{ active: type === '大学英语' }"
        >
          大学英语
        </div>
        <div
          class="right-tab base-pointer"
          @click="tabChange1('历年真题')"
          :class="{ active: type === '历年真题' }"
        >
          历年真题
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="item in tabList" :key="item.id" class="item">
        <div style="padding: 20px">
          <img
            height="120px"
            :src="`http://47.96.139.20${item.coverPicUrl}`"
            alt=""
          />
        </div>
        <div class="plan">{{ item.previousTitle }}</div>
        <div class="time">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryQuestionListByType } from "@/http";
export default {
  data() {
    return {
      tabList: [],
      type: "",
    };
  },
  created() {
    this.tabChange("高等数学");
  },
  methods: {
    async tabChange(subjectType) {
      this.type = subjectType;
      let p = {
        page: 1,
        pageSize: 10,
        questionType: "专项练习",
        subjectType,
      };
      let res = await queryQuestionListByType(p);
      if (res.entry) {
        this.tabList = res.entry;
      } else {
        this.tabList = [];
      }
    },
    async tabChange1(questionType) {
      this.type = questionType;
      let p = {
        page: 1,
        pageSize: 10,
        questionType: "历年真题",
      };
      let res = await queryQuestionListByType(p);
      if (res.entry) {
        this.tabList = res.entry;
      } else {
        this.tabList = [];
      }
    },
    toDetaiiled() {
      if (this.type === "ENROLLMENT_SCHOOL") {
        this.$router.push({
          path: "/home/universities",
        });
      } else if (this.type === "ENROLLMENT_PROFESSIONAL") {
        this.$router.push({
          path: "/home/major",
        });
      } else if (this.type === "ENROLLMENT_PLAN") {
        this.$router.push({
          path: "/home/plan",
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.index-major {
  background: #f5f5f5;
}
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
    text-align: right;
    .right-tab {
      display: inline-block;
      width: 25%;
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
  // justify-content: space-between;
  padding: 64px;
  padding-bottom: 16px;
  padding-right: 0;
  .item {
    width: 12%;
    margin-bottom: 20px;
    // background: #fff;
    margin-right: 50px;
    img {
      width: 100%;
    }
    .plan {
      text-align: center;
      font-size: 14px;
      color: #535553;
    }
    .time {
      text-align: center;
      color: #757775;
      font-size: 12px;
      padding-left: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>