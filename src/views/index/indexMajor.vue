<template>
  <div class="index-major">
    <div class="title">
      <div class="left">
        <p class="left-title">院校专业</p>
        <p class="left-tip">College Major</p>
      </div>
      <div class="right">
        <div
          class="right-tab base-pointer"
          @click="tabChange('ENROLLMENT_SCHOOL')"
          :class="{ active: type === 'ENROLLMENT_SCHOOL' }"
        >
          招生院校
        </div>
        <div
          class="right-tab base-pointer"
          :class="{ active: type === 'ENROLLMENT_PROFESSIONAL' }"
          @click="tabChange('ENROLLMENT_PROFESSIONAL')"
        >
          招生专业
        </div>
        <div
          class="right-tab base-pointer"
          :class="{ active: type === 'ENROLLMENT_PLAN' }"
          @click="tabChange('ENROLLMENT_PLAN')"
        >
          招生计划
        </div>
      </div>
    </div>
    <div class="content">
      <div
        v-for="item in tabList"
        :key="item.id"
        class="item"
        @click="goDetailed(item)"
      >
        <div class="content-item">
          <img :src="`http://47.96.139.20${item.coverPicUrl}`" alt="" />
          <div class="plan">
            <span>{{ item.enrollmentTitle }}</span>
            <span class="arrow">></span>
          </div>
          <div class="time">{{ item.publishTime }}</div>
        </div>
      </div>
    </div>
    <div class="more base-pointer" v-if="tabList.length" @click="toDetaiiled">
      查看更多
    </div>
  </div>
</template>
<script>
import { queryEnrollmentList } from "@/http";
export default {
  data() {
    return {
      tabList: [],
      type: "",
    };
  },
  created() {
    this.tabChange("ENROLLMENT_SCHOOL");
  },
  methods: {
    async tabChange(enrollmentType) {
      this.type = enrollmentType;
      let p = {
        page: 1,
        pageSize: 10,
        enrollmentType,
      };
      let res = await queryEnrollmentList(p);
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
    goDetailed(row) {
      if (this.type === "ENROLLMENT_SCHOOL") {
        this.$router.push({
          path: "/home/universitiesd",
          query: {
            id: row.id,
          },
        });
      } else if (this.type === "ENROLLMENT_PROFESSIONAL") {
        this.$router.push({
          path: "/home/majord",
          query: {
            id: row.id,
          },
        });
      } else if (this.type === "ENROLLMENT_PLAN") {
        this.$router.push({
          path: "/home/pland",
          query: {
            id: row.id,
          },
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
  // justify-content: space-between;
  padding: 64px;
  padding-bottom: 16px;
  .item {
    width: 25%;
    margin-bottom: 20px;
    // background: #fff;
    .content-item {
      margin: 0px 6%;
      background: #fff;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .plan {
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      padding-left: 8px;
      cursor: pointer;
      & > div {
        color: #101010;
      }
      .arrow {
        border-radius: 50%;
        background: #fff;
        width: 18px;
        height: 18px;
        line-height: 14px;
        padding-left: 3px;
        color: #ccc;
        // padding-top: 2px;
        border: 1px solid #ccc;
        margin-right: 10px;
      }
    }
    .time {
      color: #757775;
      font-size: 14px;
      padding-left: 8px;
      padding-bottom: 8px;
      line-height: 24px;
    }
  }
}
.more {
  color: #51a3f6;
  text-align: right;
  font-size: 14px;
  padding-right: 64px;
  padding-bottom: 16px;
}
</style>