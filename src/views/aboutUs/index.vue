<template>
  <div class="content-wrap">
       <base-carousel></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
  <div class="content">
    司越教育是一家以专升本培训、就业指导培训、学历提升为核心业务的一家综合型专业教育机构。现经营杭州总部、宁波分部、温州分部、金华分部等十余家分支机构，拥有教职工200多人。在专升本领域我司一贯秉承“体系完善 服务至上 科学管理 成绩优异”的教学理念。2019年专升本考试中，我司学员表现优异，多人考上理想本科，其中保过班升学率达到98.7%，多个区域司越学员夺得状元，创下一个个可喜成绩。在我司教育宗旨“认真负责 授业有道 培养人才”的引领下，我司独立研发完全拥有自主产权的教材达20余册，课程体系4个，有力的保障的上千名学员顺利被本科录取。在教育的道路上我们一直克服难关，勇于突破，打破常规，精益求精，全身心地为广大莘莘学子提升综合素质和竞争力而努力。相信司越，给你希望；选择司越，让你的梦想插上翅膀；在现在，在未来，在司越，成就自己，成就希望。
    </div>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";

export default {
    components: {
    baseCarousel,
    baseTitle,
  },
  data() {
    return {
       titleLeft: {
        title: "关于我们",
        enTitle: "About Us",
      },
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>
<style lang="less" scoped>
.content {
  padding: 32px 64px;
  line-height: 1.8;
}
</style>