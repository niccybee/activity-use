<script setup>
const props = defineProps({
  data: {},
});
</script>
<template>
  <div class="">
    <h1>{{ props.data.title }}</h1>
    <p>{{ data.body }}</p>
    <div class="bg-gray-100 rounded-md p-2">
      <p>{{ data.content.question }}</p>
      <div
        class="bg-white mb-1 p-2 hover:bg-blue-100 hover:outline hover:outline-blue-500 rounded-md p-2 cursor-pointer"
        v-for="item in data.content.multi" @click="emit"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
