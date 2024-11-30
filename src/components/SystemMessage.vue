<template>
  <div class = "h-auto w-full flex justify-start flex-row">
    <div class="h-auto w-fit bg-gray-700 rounded-lg p-[2%] max-w-[90%]">
      <p class="message-text mx-[5%]">{{ text }}</p>
    </div>
  </div>
</template>
  
<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped>
    .message-text {
    font-size: 14px; 
    margin: 0; 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    white-space: pre-wrap; 
    }
</style>