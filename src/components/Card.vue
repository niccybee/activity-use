<script setup>
const item = "I am an item";
</script>

<template>
  <div
    class="p-4 br-md bg-white w-full max-w-[320px] place-content-center rounded-[10px]"
  >
    <div id="card-head" class="flex items-center">
      <img src="http://picsum.photos/20" alt="icon-image" class="pr-1" />
      <h1>Card Title</h1>
    </div>
    <div id="card-body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur
        nesciunt facere quasi molestiae reprehenderit, nulla doloribus mollitia officiis
        suscipit debitis obcaecati in rem repellat tenetur quis doloremque aperiam eaque?
      </p>
    </div>
    <div id="card-interact" class="flex justify-between items-center">
      <button
        class="bg-white text-blue-800 border-blue-800 border-inside px-4 py-2 rounded-[10px]"
      >
        Back
      </button>
      <button class="bg-blue-500 text-white border-none px-4 py-2 rounded-[10px]">
        Forward
      </button>
    </div>
  </div>
</template>
