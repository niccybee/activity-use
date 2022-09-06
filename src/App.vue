<script setup>
import Card from "./components/Card.vue";
import SwipeChannel from "./components/SwipeChannel.vue";
import BottomMenu from "./components/BottomMenu.vue";
import CardRail from "./components/CardRail.vue";
import { useMainStore } from "./stores/state";

const main = useMainStore();

main.getInteractions();
// const loading = ref(false);
</script>

<template>
  <main
    class="bg-blue-300 min-h-[98vh] min-w-[100vw] flex flex-col items-center justify-center relative"
  >
    <div
      v-if="main.debug.showDataDisplay"
      class="absolute top-2 left-2 bg-white rounded-md shadow-sm p-4 z-3"
    >
      {{ main }}
    </div>
    <SwipeChannel />
    <BottomMenu class="z-5" />
    <CardRail />
  </main>
</template>
