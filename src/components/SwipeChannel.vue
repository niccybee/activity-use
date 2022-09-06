<script setup>
// import Swiper core and required modules
import { Mousewheel, Pagination, Keyboard } from "swiper";
import { storeToRefs } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import Card from "./Card.vue";
import { isMobile } from "../composables/isMobile";
import { useMainStore } from "../stores/state";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";

// variables
const main = storeToRefs(useMainStore());
const { bool } = isMobile();
const slides = main.interactions;
const modules = [Mousewheel, Keyboard, Pagination];

// actions
const onSwipe = (swipe) => {
  let s = swipe;
  let obj = {
    slidesLength: s.slides.length,
    device: s.device,
    browser: s.browser,
  };
  main.slideData.value = obj;
  // console.log("test state", main.slideData);
};
const onSlideChange = (slide) => {
  // console.log("slide", slide.activeIndex, slide);
  main.activeIndex.value = slide.activeIndex;
};
</script>
<template>
  <section class="w-full">
    <swiper
      class="h-screen flex items-center justify-center"
      :modules="modules"
      :slidesPerView="bool ? 2 : 3"
      :space-between="30"
      :centeredSlides="true"
      @swiper="onSwipe"
      @slideChange="onSlideChange"
      direction="vertical"
      :pagination="{ clickable: true }"
      :mousewheel="true"
    >
      <swiper-slide
        class="flex items-center justify-center"
        v-for="(s, i) in slides"
        :key="i"
        :virtualIndex="i"
      >
        <Card :data="{ s: s, i: i }"
      /></swiper-slide>
    </swiper>
  </section>
</template>
<style>
.swiper-slide {
}
</style>
