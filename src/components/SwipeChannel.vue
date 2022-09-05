<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const onSwipe = (swipe) => console.log(swipe);
const onSlideChange = (slide) => console.log(slide);
</script>
<template>
  <main class="bg-white">
    <swiper
      slides-per-view="3"
      space-between="16"
      @swiper="onSwipe"
      @slideChange="onSlideChange"
      direction="vertical"
      pagination
    >
      <swiper-slide>I am a slide 1</swiper-slide>
      <swiper-slide>I am a slide 2</swiper-slide>
      <swiper-slide>I am a slide 3</swiper-slide>
      <swiper-slide>I am a slide</swiper-slide>
      <swiper-slide>I am a slide</swiper-slide>
      <swiper-slide>I am a slide</swiper-slide>
    </swiper>
  </main>
</template>
