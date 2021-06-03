<template>
  <div class="content-wrap personalizedEvaluation-wrap">
    <div class="hear-wrap">司越专升本智能测试在线评估——高等数学</div>
    <div class="subject-wrap">
        <div class="subject-title"> 
            2.你的年龄是： （单选）
        </div>
        <div class="subject-content">
            <div class="subject-item">
                1.18岁及一下
            </div>
             <div class="subject-item">
                2.18岁及一下
            </div>
             <div class="subject-item">
                3.18岁及一下
            </div>
             <div class="subject-item">
                4.18岁及一下
            </div>
        </div>
        <div class="subject-answer">
            请作答：
              <el-radio-group v-model="radio">
    <el-radio :label="'A'">A</el-radio>
    <el-radio :label="'B'">B</el-radio>
    <el-radio :label="'C'">C</el-radio>
    <el-radio :label="'D'">D</el-radio>
  </el-radio-group>
        </div>
    </div>
    <div class="operation-wrap">
      <div class="prev">上一题</div>
      <div class="next">下一题</div>
    </div>
     <div class="operation-wrap">
         <div class="handInThePapers" @click="handInThePapers">
             交卷
         </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        radio:''
    };
  },
  methods:{
      handInThePapers( ) {
          this.$router.push({
              name: 'diagnosisReport',
              query: {
                  id: '555'
              }
          })
      }
  }
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
    padding: 0 42px;
    div {
         background-color: @main_color;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      border-radius: 3%;
    }
    div.prev, div.next {
      flex:  0 0 48%;
      cursor: pointer;
    }
    .handInThePapers {
        flex: 0 0 100%;
         cursor: pointer;
    }
  }
}
</style>