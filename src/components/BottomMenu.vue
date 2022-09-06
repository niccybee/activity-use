<script setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/state";
const main = storeToRefs(useMainStore());
</script>
<template>
  <nav
    class="fixed bottom-0 left-0 h-16 flex justify-between bg-white max-w-full w-full py-2"
  >
    <button
      class="ml-4 bg-white text-blue-800 border-2 border-blue-800 border-inside px-4 py-2 rounded-[10px]"
    >
      Back
    </button>
    <button @click="main.toggleDebug" v-if="main.debug.showDataDisplay" class="border-2">
      Debug
    </button>

    <div>
      <p>
        <sub class="uppercase text-xs font-bold text-gray-500">
          {{ main.activeIndex }}/ {{ main.slideData.slidesLength }}
        </sub>
      </p>
    </div>

    <button class="bg-blue-500 text-white border-none px-4 py-2 rounded-[10px] mr-4">
      Submit
    </button>
  </nav>
</template>
