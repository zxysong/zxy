<template>
  <div>
    <base-carousel :imgs="imgs"></base-carousel>
    <index-information></index-information>
    <index-major></index-major>
    <index-class></index-class>
    <index-rec></index-rec>
    <index-questions></index-questions>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import indexInformation from "./indexInformation";
import indexMajor from "./indexMajor";
import indexClass from "./indexClass";
import indexRec from "./indexRec";
import indexQuestions from "./indexQuestions";
import { querySlideshow } from "@/http";
export default {
  components: {
    baseCarousel,
    indexInformation,
    indexMajor,
    indexClass,
    indexRec,
    indexQuestions,
  },
  data() {
    return {
      imgs: [],
    };
  },
  created() {
    this.queryList();
  },
  methods: {
    async queryList() {
      let res = await querySlideshow({});
      if (res.entry) {
        this.imgs = res.entry;
      }
    },
  },
};
</script>