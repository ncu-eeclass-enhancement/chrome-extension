<template>
    <div class="w-auto h-auto max-w-[80%] bg-gray-700 rounded-lg mr-[20%]">
        <p class="message-text mx-[5%] w-auto">{{ text }}</p>
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
    font-size: 14px; /* Adjust font size if necessary */
    margin: 0; /* Remove extra margins */
    word-wrap: break-word; /* Ensure long words wrap */
    overflow-wrap: break-word; /* Modern equivalent for word wrapping */
    white-space: normal; /* Allow text to wrap */
    }
</style>