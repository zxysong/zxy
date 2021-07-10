
<template>
  <div>
    <div class="footer">
      <div class="item" style="flex: 1.5">
        <div>司越教育</div>
        <p class="mr-30">司越教育是一家以浙江普通专升本培训、</p>
        <p>就业培训、综合型专业教育机构。</p>
        <p>我司一直秉承“因为专业，所以放心”的教育理念。</p>
        <p>在教育的道路上，我们一直披荆斩棘，勇创辉煌，</p>
        <p>全身心地为广大学子提升综合素质和竞争力而努力。</p>
        <p>相信我们，会在你通往本科道路上为你保驾护航，</p>
        <p>在你走向更好的未来过程中助你一臂之力。</p>
      </div>
      <div class="item">
        <div>辅导课堂</div>
        <p class="mr-30 base-pointer" @click="toSubject1">追光计划</p>
        <p class="mr-30 base-pointer" @click="toSubject1">巅峰计划X</p>
        <p class="mr-30 base-pointer" @click="toSubject1">蝶变计划A&B</p>
      </div>
      <div class="item">
        <div>试题中心</div>
        <p class="mr-30 base-pointer" @click="toSubject('高等数学')">
          高等数学
        </p>
        <p class="mr-30 base-pointer" @click="toSubject('大学英语')">
          大学英语
        </p>
        <p class="mr-30 base-pointer" @click="toSubject('大学语文')">
          大学语文
        </p>
        <p class="mr-30 base-pointer" @click="toSubject('历年真题')">
          历年真题
        </p>
      </div>
      <div class="item">
        <div>浙江司越专升本</div>
        <p class="mr-30">地址：江干区学源街文创大厦9楼929</p>
        <p>电话：0571-81955565</p>
        <p>邮箱：info@education&learning.com</p>
      </div>
    </div>

    <p class="tip">浙公网安备 33011802002160号</p>
    <p class="tip">建议谷歌、火狐浏览器浏览本网站</p>
    <p class="tip tip-pad">
      Copyright @ 2014-2021 杭州司越教育咨询有限公司 All Rights Reserved
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    toSubject(type) {
      this.$router.push({
        path: "/home/subjectType",
        query: {
          type,
        },
      });
    },
    toSubject1(type) {
      this.$router.push({
        path: "/home/tutorialClass",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  width: 100%;
  height: 340px;
  background: #535553;
  padding-top: 80px;
  padding-left: 60px;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > div {
      color: #c0a061;
      font-size: 16px;
    }
    & > p {
      color: #fff;
      font-size: 12px;
    }
  }
  .mr-30 {
    margin-top: 30px;
  }
}
.tip {
  background: #535553;
  text-align: center;
  font-size: 16px;
  color: grey;
}
.tip-pad {
  padding-bottom: 20px;
}
</style>