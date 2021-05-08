<template>
  <div>
    <base-carousel></base-carousel>
    <index-information></index-information>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import indexInformation from "./indexInformation";
export default {
  components: {
    baseCarousel,
    indexInformation,
  },
};
</script>