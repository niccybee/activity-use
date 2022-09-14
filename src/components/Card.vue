<script setup>
import CardStartItem from "./CardStartItem.vue";
import CardInfoBox from "./CardInfoBox.vue";
import CardVideoBox from "./CardVideoBox.vue";
import CardMultiChoice from "./CardMultiChoice.vue";
import CardButtons from "./CardButtons.vue";
import { useMainStore } from "../stores/state";
import { ref } from "vue";

const main = useMainStore();

const props = defineProps({
  data: {},
});
let firstCard = "m1 max-w-[420px]";
let regCard = "m-1 bg-white rounded-[10px] p-4 w-full max-w-[500px]";
let withButtons = "rounded-t-[10px]";

const cardType = () => {
  if (props.data.i === 0) return firstCard;
  if (props.data.s.showButtons) return withButtons;
};
// const item = data.s;
</script>
<template>
  <article :class="props.data.i === 0 ? firstCard : regCard">
    <div v-if="main.debug.showPropsDisplay" class="bg-white rounded-md px-4 py-2">
      {{ props.data }}
    </div>
    <CardStartItem v-if="props.data.i === 0" :data="data.s"></CardStartItem>
    <CardInfoBox v-if="data.s.type === 'text'" :data="data.s" />
    <CardVideoBox v-if="data.s.type === 'video'" :data="data.s" />
    <CardMultiChoice v-if="data.s.type === 'multichoice'" :data="data.s" />
    <!-- Buttons -->
    <CardButtons v-show="data.s.state.showButtons" />
  </article>
</template>
