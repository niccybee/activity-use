<script setup>
import CardStartItem from "./CardStartItem.vue";
import CardInfoBox from "./CardInfoBox.vue";
import CardVideoBox from "./CardVideoBox.vue";
import CardMultiChoice from "./CardMultiChoice.vue";
import { useMainStore } from "../stores/state";

const main = useMainStore();

const props = defineProps({
  data: {},
});
let firstCard = "m1 max-w-[420px]";
let regCard = "m-1 bg-white rounded-[10px] p-4 max-w-[500px]";
// const item = data.s;
</script>
<template>
  <article :class="props.data.i === 0 ? firstCard : regCard">
    <!-- <p>{{ data.s }}</p> -->
    <div v-if="main.debug.showPropsDisplay" class="bg-white rounded-md px-4 py-2">
      {{ props.data }}
    </div>
    <CardStartItem v-if="props.data.i === 0" :data="data.s"></CardStartItem>
    <CardInfoBox v-if="data.s.type === 'text'" :data="data.s" />
    <CardVideoBox v-if="data.s.type === 'video'" :data="data.s" />
    <CardMultiChoice v-if="data.s.type === 'multichoice'" :data="data.s" />
    <!-- Buttons -->
    <div
      v-if="props.data.s.showButtons"
      id="card-interact"
      class="flex justify-between items-center"
    >
      <button
        class="bg-white text-blue-800 border-blue-800 border-inside px-4 py-2 rounded-[10px]"
      >
        Back
      </button>
      <button class="bg-blue-500 text-white border-none px-4 py-2 rounded-[10px]">
        Forward
      </button>
    </div>
  </article>
</template>
