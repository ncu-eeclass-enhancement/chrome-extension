<template>
  <div class = "h-auto w-full flex justify-end flex-row">
    <div class="h-auto w-fit bg-purple-400 rounded-lg p-[2%] max-w-[90%] rounded-tr-none">
      <p class="message-text mx-[5%] text-gray-900">{{ text }}</p>
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
    word-wrap: break-word; /* Ensure long words wrap */
    overflow-wrap: break-word; /* Modern equivalent for word wrapping */
    white-space: normal; /* Allow text to wrap */
  }
  </style>
  