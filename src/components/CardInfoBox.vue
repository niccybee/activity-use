<script setup>
const props = defineProps({
  data: {},
});
</script>

<template>
  <div class="p-4 br-md bg-white w-full place-content-center rounded-[10px]">
    <div id="card-head" class="flex items-center">
      <img src="http://picsum.photos/20" alt="icon-image" class="pr-1" />
      <h1>{{ data.title }}</h1>
    </div>
    <div id="card-body">
      <p>
        {{ data.body }}
      </p>
    </div>
  </div>
</template>
