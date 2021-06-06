<template>
  <div class="home-wrap">
    <div class="header">
      <div class="left">
        <img src="../../assets/imgs/title.png" alt="" />
      </div>
      <div class="right">
        <div class="item">
          <router-link
            :to="'index'"
            :class="{ active: $route.path.includes('/home/index') }"
            >首页</router-link
          >
        </div>
        <div class="height"></div>
        <div class="item" style="padding: 0; cursor: pointer">
          <!-- <router-link
            :to="'information'"
            :class="{ active: $route.path.includes('/home/information') }"
            >专升本资讯</router-link
          > -->
          <el-dropdown>
            <div
              :class="{
                active:
                  $route.path.includes('hot') ||
                  $route.path.includes('notice') ||
                  $route.path.includes('preparation') ||
                  $route.path.includes('plan') ||
                  $route.path.includes('universities') ||
                  $route.path.includes('major'),
              }"
            >
              专升本资讯
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                @click.native="goDetailed('hot')"
                :class="{ active: $route.path.includes('hot') }"
                >热门推荐</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailed('notice')"
                :class="{ active: $route.path.includes('notice') }"
                >开课公告</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailed('preparation')"
                :class="{ active: $route.path.includes('preparation') }"
                >备考咨讯</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailed('plan')"
                :class="{ active: $route.path.includes('plan') }"
                >招生计划</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailed('universities')"
                :class="{ active: $route.path.includes('universities') }"
                >招生院校</el-dropdown-item
              >
              <el-dropdown-item @click.native="goDetailed('major')"
                >招生专业</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="height"></div>
        <div class="item">
          <router-link
            :to="'/home/tutorialClass'"
            :class="{ active: $route.path.includes('/home/tutorialClass') }"
            >辅导课堂</router-link
          >
        </div>
        <div class="height"></div>
        <div class="item" style="padding: 0; cursor: pointer">
          <!-- <router-link
            :to="'/home/testCenter'"
            :class="{ active: $route.path.includes('/home/testCenter') }"
            >试题中心</router-link
          > -->
          <el-dropdown>
            <div :class="{ active: $route.path.includes('testCenter') }">
              试题中心
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                @click.native="goDetailedTest('专项练习')"
                :class="{ active: typeTest === '专项练习' }"
                >专项练习</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailedTest('历年真题')"
                :class="{ active: typeTest === '历年真题' }"
                >历年真题</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailedTest('模拟测试')"
                :class="{ active: typeTest === '模拟测试' }"
                >模拟测试</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="goDetailedTest('考试大纲')"
                :class="{ active: typeTest === '考试大纲' }"
                >考试大纲</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="height"></div>
        <div class="item" style="padding: 0; cursor: pointer">
          <el-dropdown>
            <div>个性化测评</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="toTest('1')"
                >语文</el-dropdown-item
              >
              <el-dropdown-item @click.native="toTest('2')"
                >数学</el-dropdown-item
              >
              <el-dropdown-item @click.native="toTest('3')"
                >英语</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="height"></div>
        <div class="item">
          <router-link
            :to="'/home/aboutUs'"
            :class="{ active: $route.path.includes('/home/aboutUs') }"
            >关于我们</router-link
          >
        </div>
      </div>
    </div>
    <div class="main-wrap">
      <router-view />
    </div>

    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseFooter from "@/components/baseFooter";
import merge from "webpack-merge";
export default {
  name: "home",
  data() {
    return {
      typeTest: "",
    };
  },
  components: {
    BaseFooter,
  },
  methods: {
    goDetailed(type) {
      this.$router.push({
        path: `${type}`,
      });
    },
    goDetailedTest(type) {
      this.typeTest = type;
      let route = this.$route.path;
      console.log(route);
      if (route.includes("/home/testCenter")) {
        this.$router.push({
          query: merge(this.$route.query, { type: type }),
        });
      } else {
        this.$router.push({
          path: "/home/testCenter",
          query: {
            type,
          },
        });
      }
    },
    toTest(type) {
      let paperId, subjectType;
      if (type === "1") {
        paperId = 10001;
        subjectType = "Chinese";
      } else if (type === "2") {
        subjectType = "mathematics";
        paperId = 20001;
      } else if (type === "3") {
        subjectType = "English";
        paperId = 30001;
      }
      let { href } = this.$router.resolve({
        path: `/personalizedEvaluation?paperId=${paperId}&subjectType=${subjectType}`,
        qeury: {
          paperId,
          subjectType,
        },
      });
      console.log(href);
      window.open(href, "_blank");
    },
  },
};
</script>
<style lang="less" scoped>
.home-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  .main-wrap {
    flex: 1;
    min-width: 1200px;
    width: 100%;
  }
}
.header {
  display: flex;
}
.left,
.right {
  display: inline-block;
}
.title {
  background-image: url("../../assets/imgs/title.png");
}
.right {
  display: flex;
  align-items: center;
  margin-left: 100px;
  width: 100%;
  justify-content: center;
}
.item {
  // margin: 0 60px;
  min-width: 160px;
  text-align: center;
  color: #535553;
  a {
    color: #535553;
  }
}
.active {
  color: #51a3f6 !important;
}
.height {
  height: 21px;
  width: 1px;
  background: #757775;
}
.test-self {
  position: fixed;
  right: 8px;
  top: 40%;
  z-index: 20;
  background: #51a3f6;
  padding: 6px 8px;
  .title {
    cursor: pointer;
    color: #fff;
  }
}
</style>