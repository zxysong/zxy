<template>
  <div class="content-wrap personalizedEvaluation-wrap">
    <div class="hear-wrap">司越专升本智能测试在线评估——高等数学</div>
    <div class="subject-wrap">
      <!-- <div class="subject-title">2.你的年龄是： （单选）</div>
      <div class="subject-content">
        <div class="subject-item">1.18岁及一下</div>
        <div class="subject-item">2.18岁及一下</div>
        <div class="subject-item">3.18岁及一下</div>
        <div class="subject-item">4.18岁及一下</div>
      </div> -->
      <img
        v-if="questions[currentIndex]"
        :src="`http://47.96.139.20${questions[currentIndex].questionPicUrl}`"
        alt=""
      />
      <div class="subject-answer">
        请作答：
        <el-radio-group v-model="radio" @change="radioChange">
          <el-radio :label="'A'">A</el-radio>
          <el-radio :label="'B'">B</el-radio>
          <el-radio :label="'C'">C</el-radio>
          <el-radio :label="'D'">D</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="operation-wrap">
      <div class="prev" @click="prev">上一题</div>
      <div class="next" @click="next">下一题</div>
    </div>
    <div class="operation-wrap">
      <div class="handInThePapers" @click="handInThePapers">交卷</div>
    </div>
  </div>
</template>
<script>
import { queryQuestionList, submitAnswerAndGetEvaluation } from "@/http";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      radio: "",
      questions: [],
      currentIndex: 0,
      answers: [],
      paperId: null,
      subjectType: "",
    };
  },
  created() {
    console.log(this.$route);
    this.paperId = this.$route.query.paperId;
    this.subjectType = this.$route.query.subjectType;
    this.queryQuestionList();
  },
  methods: {
    ...mapMutations(["setScoreObj"]),
    async queryQuestionList() {
      let p = {
        paperId: this.paperId,
        subjectType: this.subjectType,
      };
      let res = await queryQuestionList(p);
      if (res.entry) {
        this.questions = res.entry || [];
      }
    },
    async handInThePapers() {
      console.log(this.answers);
      if (this.answers.length < this.questions.length) {
        return this.$message({
          type: "warning",
          message: "题目未做完，请耐心作答。",
        });
      }
      let p = {
        questionBankVOList: this.answers,
        subjectType: "Chinese",
      };
      let res = await submitAnswerAndGetEvaluation(p);
      if (res.status) {
        this.setScoreObj(res.entry);
        this.$router.push({
          name: "diagnosisReport",
          query: {
            id: "555",
          },
        });
      }
    },
    radioChange(o) {
      let row = {
        id: this.questions[this.currentIndex].id,
        answer: o,
      };
      this.answers[this.currentIndex] = row;
      setTimeout(() => {
        this.next();
      }, 500);
    },
    prev() {
      if (this.currentIndex === 0) {
        return this.$message({
          type: "warning",
          message: "已经是第一题了",
        });
      }
      --this.currentIndex;
      this.radio = "";
      if (this.answers[this.currentIndex]) {
        this.radio = this.answers[this.currentIndex].answer;
      }
    },
    next() {
      if (!this.radio) {
        return this.$message({
          type: "warning",
          message: "请先选择",
        });
      }
      if (this.currentIndex >= this.questions.length - 1) {
        return this.$message({
          type: "warning",
          message: "已经是最后一题了，请提交答卷",
        });
      }
      ++this.currentIndex;
      this.radio = "";
      if (this.answers[this.currentIndex]) {
        this.radio = this.answers[this.currentIndex].answer;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@main_color: rgba(69, 171, 229, 100);
.personalizedEvaluation-wrap {
  .hear-wrap {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: @main_color;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .subject-wrap {
    background-color: #fff;
    margin: 38px 42px;
    padding: 38px 42px;
    border: 1px solid #bbb;
    box-sizing: border-box;
    font-size: 14px;
    color: #101010;
    .subject-title {
      color: #000;
      font-weight: bold;
      position: relative;
      margin-bottom: 14px;
      &::before {
        content: "*";
        color: red;
        position: absolute;
        left: -8px;
      }
    }
    .subject-content {
      padding-left: 18px;
      .subject-item {
        margin-bottom: 12px;
      }
    }
    .subject-answer {
      margin: 28px 0 32px 0;
      color: #101010;
    }
  }
  .operation-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 42px 20px;
    div {
      background-color: @main_color;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      border-radius: 3%;
    }
    div.prev,
    div.next {
      flex: 0 0 48%;
      cursor: pointer;
    }
    .handInThePapers {
      flex: 0 0 100%;
      cursor: pointer;
    }
  }
}
</style>