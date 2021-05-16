<template>
  <div>
    <el-carousel :interval="interval" arrow="always">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <div class="img-wrap">
          <img :src="item.img" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import lunbo from '@/assets/imgs/lunbo.png'
export default {
  props: {
    imgs: {
      default: () => [
        {
          img: lunbo
        },
         {
          img: lunbo
        }
      ],
    },
    interval: {
      type: Number,
      default: 50000,
    },
    arrow: {
      type: String,
      default: "always",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
/deep/.el-carousel__container {
  height: 540px;
 @media screen and (max-width: 1600px){
       height: 440px;
  }
  .img-wrap {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
}

</style>