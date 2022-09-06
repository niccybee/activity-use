<template>
  <div class="rounded-[10px] bg-white p-4 w-full">
    <h1>{{ data.title }}</h1>
    <div class="rounded-md">
      <div v-html="data.body || data.content.video"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {},
});
const data = props.data;
</script>
