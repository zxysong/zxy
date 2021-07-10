<template>
  <div>
    <el-carousel
      :interval="interval"
      arrow="always"
      :height="bannerHeight + 'px'"
    >
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <div class="img-wrap" @click="topage(item)">
          <img
            ref="imgRefs"
            :src="`http://47.96.139.20${item.slideshowPicUrl}`"
            alt=""
            @load="load()"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import lunbo from "@/assets/imgs/lunbo.png";
export default {
  props: {
    imgs: {
      default: () => [
        {
          img: lunbo,
        },
        {
          img: lunbo,
        },
      ],
    },
    interval: {
      type: Number,
      default: 3000,
    },
    arrow: {
      type: String,
      default: "always",
    },
  },
  data() {
    return {
      bannerHeight: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.imgRefs && this.$refs.imgRefs[0]) {
        this.bannerHeight = this.$refs.imgRefs[0].height;
      }
    });
  },
  methods: {
    topage(item) {
      if (!item.slideshowPicLink) {
        return;
      }
      let { href } = this.$router.resolve({
        path: item.slideshowPicLink,
      });
      window.open(href, "_blank");
    },
    load() {
      this.$nextTick(() => {
        this.bannerHeight =
          this.$refs.imgRefs &&
          this.$refs.imgRefs[0] &&
          this.$refs.imgRefs[0].height;
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-carousel__container {
  // height: 400px;
  // @media screen and (max-width: 1600px) {
  //   height: 360px;
  // }
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