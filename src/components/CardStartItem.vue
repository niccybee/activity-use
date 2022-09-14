<template>
  <section class="flex flex-col items-center justify-center w-full text-center">
    <div
      class="rounded-full w-18 h-18 p-4 border-4 border-white"
      style="background: url('https://picsum.photos/200')"
    ></div>
    <div class="bg-white rounded-md p-2"><slot /></div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {},
});
</script>
