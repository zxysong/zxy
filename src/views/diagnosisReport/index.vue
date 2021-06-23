<template>
  <div class="content-wrap">
    <slotHtml>
      <div class="summary">{{ scoreObj.totalScore }}分</div>
      <div class="summary">{{ scoreObj.evaluationTitle }}</div>
      <div class="details details-html" v-html="scoreObj.suggest"></div>
      <div v-if="scoreObj.suggestPicUrlList" class="test-img">
        <img
          v-for="item in scoreObj.suggestPicUrlList"
          :src="`http://47.96.139.20${item}`"
          alt=""
          :key="item"
        />
      </div>
    </slotHtml>
  </div>
</template>
<script>
import schoolReport from "@/assets/imgs/school-report.png";
import slotHtml from "./components/slot";
import { mapState } from "vuex";
export default {
  components: {
    slotHtml,
  },
  data() {
    return {
      hbs: schoolReport,
      math: {
        1: {
          summary: "基础薄弱，需更加努力",
          details:
            "您的基础较为薄弱，初高中知识并不熟练，高等数学的水平属于零基础，符合大多数报班学员的情况，在今后的高等数学学习开始时需要更加努力一些，但只要前期认真听课，后面依然会轻松很多。",
        },
        2: {
          summary: "基础较为薄弱，需更加努力",
          details:
            "您掌握了基本的初高中基础知识，但高等数学的基础相对比较薄弱，应该说属于零基础，符合大多数报班学员的情况。但基本的数学计算还是已经掌握了，在同期报名的学员中，基础并不算差的，高等数学和初等数学衔接的部分并不多，希望同学能够在接下来的学习中认真对待，努力上岸！",
        },
        3: {
          summary: "有一定基础，需再接再厉",
          details:
            "您掌握了基本的初高中基础知识，并有一定高等数学的基础，尤其是求极限的基本概念。而求极限是属于历年专升本考试中都会出现的较为简单的知识点，此分段学员的基础相对大部分学员而言，已初具一定的优势，希望在接下来的课程中能够再接再厉，认真学习，争取取得更好的成绩。",
        },
        4: {
          summary: "基础很好，努力攻克难题",
          details:
            "您的水平已超越同期学员的99%，真·百里挑一！应对考场上相对简单的题目基本都能够做出来，但稍微复杂一些的题型就会被难住，想要取得更好的成绩，就在接下来的学习中好好努力吧！",
        },
        5: {
          summary: "基础很好，努力攻克难题",
          details:
            "您的水平已基本达到考试要求，单科省状元种子选手！建议您直接参加考试呢亲。",
        },
      },
      chinese: {},
      English: {},
    };
  },
  computed: {
    ...mapState(["scoreObj"]),
  },
};
</script>
<style lang="less" scoped>
@main_color: rgba(69, 171, 229, 100);
.summary {
  color: rgba(235, 91, 51, 100);
  font-size: 24px;
  margin-top: 6px;
  text-align: center;
}
.details {
  color: rgba(83, 85, 83, 100);
  font-size: 22px;
  margin-top: 18px;
  // text-align: center;
  line-height: 32px;
  white-space: pre-line;
  padding: 0 120px;
}
.test-img {
  padding: 0 120px;
  margin-top: 50px;
  img {
    width: 100%;
    margin-top: 10px;
  }
}
</style>


