<template>
  <div>
    <div class="title">
      <div class="left">
        <p class="left-title">名师推荐</p>
        <p class="left-tip">Teacher recommendation</p>
      </div>
      <div class="right"></div>
    </div>
    <div class="content">
      <el-carousel :autoplay="false" arrow="always" :height="'500px'">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <div class="img-wrap">
            <div class="img">
              <img class="img-1" :src="item.url" alt="" />
            </div>
            <p class="name">{{ item.name }}</p>
            <p class="p1">
              {{ item.obj }}
            </p>
            <p class="p1 p2" v-if="item.obj1">
              {{ item.obj1 }}
            </p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import donglin from "@/assets/imgs/donglin.png";
import zhangboyin from "@/assets/imgs/zhangboyin.png";
import zhanglijun from "@/assets/imgs/zhanglijun.png";
import zhangtianlun from "@/assets/imgs/zhangtianlun.png";
import dongxinrao from "@/assets/imgs/dongxinrao.png";
import duanxiaoru from "@/assets/imgs/duanxiaoru.png";
export default {
  data() {
    return {
      imgs: [
        {
          url: donglin,
          name: "董琳",
          obj:
            "授人以鱼不如授人以渔”是本人一直遵从的教学理念。自从事 专升本教学以来，本人在教学能力与师生关系方面不断受到学员的好 评，积累的英语教学经验丰富。与此同时，本人在授课过程中很注重 对学生学习习惯及学习思维的培养，而不仅只针对知识的输出。",
        },
        {
          url: zhangboyin,
          name: "张博颖",
          obj:
            "从事教育行业多年，培养过多名优秀学员。熟悉考试形式，深谙考试套路，擅长由浅入深地讲解知识点，并结合实时热点考点，让不同层次的学生都能有所收获。性格热情活泼，课堂氛围轻松愉快，能及时准确地解答学习中的疑惑。",
        },
        {
          url: zhanglijun,
          name: "张丽君",
          obj:
            "我是司越一块砖，哪里需要哪里搬本人具备多年英语教学经验；亲近学生，能与学生形成良好的师生关系；深谙英语学习技巧，语法梳理清晰；擅长以结构化教学培养学生的全局观，建构知识体系；注重培养学生主动思考的能力及对知识点的理解运用。",
        },
        {
          url: zhangtianlun,
          name: "张天伦",
          obj:
            "性格开朗乐观，在课堂内外与学生关系融洽。课堂讲授具有较强的感染力，能充分调动学生的积极性。从事教育行业五年，具备良好的课堂组织能力以及教学技能。在教学过程中，擅长使用生动实例来转化枯燥语法，让学生能够在“大白话”中更好地吸收知识。同时对于试卷题型进行精细化拆分，能够根据具体题型、答题技巧、个体能力等要素对学生进行针对指导。",
        },
        {
          url: dongxinrao,
          name: "董鑫尧",
          obj:
            "是学员眼中的“好说话的班主任”，更是私下的好朋友。在课余时间和学员打成一片，学员只要关乎学习的事情，学习上的正当诉求，及时尽力的满足。让学员觉得只要是学习上的问题，都能及时帮他们解决，给予他们合理的解决方案，建立互相信任良好的师生关系。不同的学员，不同的管理方法，灵活变通，让师生关系更加融洽。这是我对待工作的态度。与学员亦师亦友，灵活的管理或许是作为一个教务老师工作的态度。",
        },
        {
          url: duanxiaoru,
          name: "段小茹",
          obj:
            "1、自己不会放弃班里每一位学生，鼓励班里成绩不好但是很认真的学生，树立这部分学员的自信心，对于班里不学习的学生，会严厉一些，严格要求学生，严而有理，以理服人。以身作则，为人师表，老师的一举一动，一言一行，都对学生有潜移默化的影响。",
          obj1:
            "2、课下主动亲近学生，与学生平等相处，学生会主动找你分享自己生活中发生的一些事，课下是学生们的姐姐、朋友，是他们很好的倾听者，并做到学生私事的保密，并且给予他们在问题中恰当的建议，通过师生之间的交流、了解，缩短之间的距离。亦师亦友、友好和善的处事方式进而建立真诚和谐的师生关系。",
        },
      ],
    };
  },
  components: {
    // baseCarousel,
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
.img-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px;
  background: url("../../assets/imgs/indexRec.png") no-repeat right bottom;
  background-size: cover;
  .img {
    width: 240px;
    // height: 200px;
    position: absolute;
    left: 300px;
    .img-1 {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    position: absolute;
    left: 560px;
    color: #51a3f6;
    font-size: 18px;
  }
  .p1 {
    position: absolute;
    left: 560px;
    top: 130px;
    // max-width: 400px;
    min-width: 150px;
    width: 40%;
    text-indent: 2em;
    color: #757775;
    font-size: 14px;
    line-height: 22px;
  }
  .p2 {
    top: 210px;
  }
}
</style>