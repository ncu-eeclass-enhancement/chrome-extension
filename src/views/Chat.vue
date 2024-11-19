<template>
    <div class="h-[100%] w-[100%] flex flex-col">
      <!-- Message List -->
      <div class="w-full h-[80%] flex flex-col overflow-auto p-4">
        <div v-for="(message, index) in messages" :key="index" class="flex flex-col mb-2">
            <UserMessage v-if="message.sender === 'user'" :text="message.text" />
            <SystemMessage v-else :text="message.text" />
        </div>
      </div>
  
      <!-- Input Box -->
      <div class="w-full h-[20%] flex justify-center items-center p-2">
        <input
          v-model="userMessage"
          @keyup.enter="sendMessage"
          type="text"
          class="w-full h-[100%] px-4 py-2 border rounded-lg bg-gray-700"
          placeholder="Type a message..."
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import UserMessage from '../components/UserMessage.vue';
  import SystemMessage from '../components/SystemMessage.vue';
  import { ref } from 'vue';
  
  const userMessage = ref(''); // Holds the current text the user is typing
  const messages = ref([ // Initial messages (system message)
    { text: '嗨! 我是E起學，請問需要什麼幫助呢?', sender: 'system' },
  ]);
  
  // Function to send the message
  const sendMessage = () => {
    if (userMessage.value.trim()) {
      // Add the user's message to the list
      messages.value.push({ text: userMessage.value, sender: 'user' });
      userMessage.value = ''; // Clear the input box
      scrollToBottom(); // Scroll to the bottom after a new message
  
      setTimeout(() => {
        messages.value.push({
          text: 'Thank you for your message!',
          sender: 'system',
        });
        scrollToBottom();
      }, 1000);
    }
  };
  
  // Scroll to the bottom of the messages container
  const scrollToBottom = () => {
    const messageList = document.querySelector('.w-full.h-[80%]');
    messageList.scrollTop = messageList.scrollHeight;
  };
  </script>

  <style scoped>
  </style>
  