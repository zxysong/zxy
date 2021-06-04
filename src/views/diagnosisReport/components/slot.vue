<template>
  <div class="content-wrap diagnosisReport-wrap">
    <div class="img-wrap">
      <img :src="schoolReport" alt="" />
    </div>
    <div class="report-wrap">
       <slot ></slot>
    </div>
    <div class="go-back" @click="handleGoBack">返回</div>
  </div>
</template>
<script>
import schoolReport from "@/assets/imgs/school-report.png";
export default {
  data() {
    return {
      schoolReport,
    };
  },
  methods: {
      handleGoBack(){
          this.$emit('handleGoBack', {})
      }
  }
};
</script>
<style lang="less" scoped>
@main_color: rgba(69, 171, 229, 100);
.diagnosisReport-wrap {
  padding: 0 42px;
  .img-wrap {
    padding-top: 100px;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
    }
  }
  .report-wrap {
    text-align: center;
    // .summary {
    //   color: rgba(235, 91, 51, 100);
    //   font-size: 24px;
    //   margin-top: 16px;
    //   text-align: center;
    // }
    // .details {
    //   color: rgba(83, 85, 83, 100);
    //   font-size: 22px;
    //   margin-top: 18px;
    // }
  }
  .go-back {
    margin: 0 auto;
    margin-top: 80px;
    width: 25%;
    background-color: @main_color;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 3%;
    cursor: pointer;
  }
}
</style>