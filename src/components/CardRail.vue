<script setup>
import { isMobile } from "../composables/isMobile";
const { bool } = isMobile();
let desktopSlider = "h-[calc(100vh)] w-4 bg-blue-400 absolute top-0 left-[50%]";
let mobileSlider = "h-[calc(100vh)] w-4 bg-blue-400 absolute top-0 left-[50%]";
</script>
<template>
  <div id="track" :class="bool ? mobileSlider : desktopSlider"></div>
</template>
