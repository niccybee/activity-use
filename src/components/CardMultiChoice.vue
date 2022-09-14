<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {},
});

// TODO: select attribute on answers
// const test = props.data.map((x) => ({ ...x, selected: false }));
// const answers = ref(props.data.content.multi);

const selectedValue = ref("");
</script>
<template>
  <div class="">
    <p>{{ test }}</p>
    <h1>{{ props.data.title }}</h1>
    <p>{{ data.body }}</p>
    <div class="bg-gray-100 rounded-md p-2">
      <p>{{ data.content.question }}</p>
      <div
        @click="selectedValue = item.value"
        class="bg-white mb-1 p-2 hover:bg-blue-100 hover:outline hover:outline-blue-500 focus:bg-blue-100 focus:outline focus:outline-blue-500 rounded-md p-2 cursor-pointer"
        v-for="item in data.content.multi"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
