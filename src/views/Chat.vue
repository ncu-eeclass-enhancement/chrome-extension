<template>
    <div class="h-[100%] w-[100%] flex flex-col">
      <!-- Message List -->
      <div id="messageList" class="w-full h-[90%] flex flex-col overflow-auto p-4">
        <div v-for="(message, index) in messages" :key="index" class="flex flex-col mb-2">
            <UserMessage v-if="message.sender === 'user'" :text="message.text" />
            <SystemMessage v-else :text="message.text" />
        </div>

        <!-- Waiting Icon -->
        <div  v-if="loading" class="flex justify-center items-center w-full h-[5%]">
          <font-awesome-icon class = "w-full h-full" :icon="['fas', 'spinner'] " spin size="2x" />
        </div>
      </div>
  
      <!-- Input Box -->
      <div class="w-full h-[10%] flex justify-center items-center border rounded-lg bg-purple-700">
        <textarea
          v-model="userMessage"
          type="text"
          class="w-full h-[100%] px-4 py-2 bg-purple-900 rounded-tl-lg rounded-bl-lg"
          placeholder="想問什麼呢?"
        ></textarea>
        <button
          @click="sendMessage"
          class="h-full px-4 py-2 bg-purple-500 text-white font-bold hover:bg-purple-600 rounded-tr-lg rounded-br-lg"
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
  

  const loading = ref(false);
  const userMessage = ref(''); 
  const messages = ref([ 
    { text: '嗨! 我是E起學，請問需要什麼幫助呢?', sender: 'system' },
  ]);
  
  const send = async (courseId, content) => {
  try {
    const url = `https://ncu-eeclass-enhancement.squidspirit.com/message/${courseId}/send`;
    const headers = await getCookiesHeader();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.body) {
      throw new Error('ReadableStream is not supported.');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    // Add a new system message placeholder to `messages`
    const messageRef = { text: '', sender: 'system' };
    messages.value = [...messages.value, messageRef]; // Ensure reactivity by creating a new array

    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;

      if (value) {
        let text = decoder.decode(value, { stream: true });
        if (text.endsWith('\r\n')) {
          text = text.slice(0, -2);
        }
        messageRef.text += text;
        messages.value = [...messages.value];
        scrollToBottom();
      }
    }

    console.log('Stream finished');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
  
  const sendMessage = () => {
    if (userMessage.value.trim()) {
      let courseId = '';
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const currentUrl = tabs[0].url;
          const match = currentUrl.match(/\/(\d+)$/);
          if (match) {
            courseId = match[1];
            
            console.log(courseId, userMessage.value);
            messages.value.push({ text: userMessage.value, sender: 'user' });
            send(courseId, userMessage.value);
            userMessage.value = '';
          }
        }
      });
    }
  };



  const getCookiesHeader = async () => {
    const domain = "https://ncueeclass.ncu.edu.tw"; 
    const cookieNames = ["PHPSESSID", "account", "accesstoken"];

    const getCookie = (name) => {
      return new Promise((resolve) => {
        chrome.cookies.get({ name, url: domain }, (cookie) => {
          resolve(cookie ? `${name}=${cookie.value}` : "");
        });
      });
    };

    const cookieValues = await Promise.all(cookieNames.map(getCookie));
    const cookiesString = cookieValues.filter(Boolean).join("; ");
    const X_With_Cookieheader = { "X-With-Cookie": cookiesString };
    
    return X_With_Cookieheader;
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
  