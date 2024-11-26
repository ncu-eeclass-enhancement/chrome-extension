<template>
    <div class="h-[100%] w-[100%] flex flex-col">
      <!-- Message List -->
      <div id="messageList" class="w-full h-[80%] flex flex-col overflow-auto p-4">
        <div v-for="(message, index) in messages" :key="index" class="flex flex-col mb-2">
            <UserMessage v-if="message.sender === 'user'" :text="message.text" />
            <SystemMessage v-else :text="message.text" />
        </div>
      </div>
  
      <!-- Input Box -->
      <div class="w-full h-[20%] flex justify-center items-center border rounded-lg bg-gray-700">
        <textarea
          v-model="userMessage"
          type="text"
          class="w-full h-[100%] px-4 py-2 bg-gray-700 rounded-tl-lg rounded-bl-lg"
          placeholder="想問什麼呢?"
        ></textarea>
        <button
          @click="sendMessage"
          class="h-full px-4 py-2 bg-gray-500 text-white font-bold hover:bg-gray-600 rounded-tr-lg rounded-br-lg"
        >
          <!-- Send Icon -->
          <font-awesome-icon :icon="['fas', 'paper-plane']"/>
      </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import UserMessage from '../components/UserMessage.vue';
  import SystemMessage from '../components/SystemMessage.vue';
  
  import { ref } from 'vue';
  import { nextTick } from 'vue';
  
  const userMessage = ref(''); 
  const messages = ref([ 
    { text: '嗨! 我是E起學，請問需要什麼幫助呢?', sender: 'system' },
  ]);
  
  // function to send the message
  const sendMessage = () => {
    if (userMessage.value.trim()) {
      // add the user's message to the list
      messages.value.push({ text: userMessage.value, sender: 'user' });
      userMessage.value = ''; 
      scrollToBottom(); 
    }
  };
  
  const scrollToBottom = () => {
    nextTick(() => {
      const messageList = document.getElementById('messageList');
      if (messageList) {
        messageList.scrollTop = messageList.scrollHeight;
      }
    });
  };
  </script>

<style scoped>
#messageList {
  scroll-behavior: smooth;
}
</style>
  