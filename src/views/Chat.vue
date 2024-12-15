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
  
  const systemResponses = [
    "以下是文件中的重點整理，主要圍繞 Python 的流程控制與應用：\n\n1. 流程控制概念：使用 `if`、`elif`、`else` 實現條件判斷，透過流程圖規劃程序執行順序。\n\n2. BMI 計算範例：計算 BMI，並提供過輕、標準、過重三種回饋，應用多條件判斷。\n\n3. 判斷式技巧：\n- 比較運算子（如 `==`、`>`）。\n- 邏輯運算子（如 `and`、`or`）。\n- 巢狀寫法處理更細緻的邏輯。\n\n4. 錯誤處理：使用 `.isdigit()` 判斷輸入是否為整數，避免程序崩潰。\n\n5. 登入驗證範例：驗證帳號密碼，並使用 `os.path.exists()` 檢查檔案是否存在。\n\n6. 作業指引：\n- 根據性別與體脂率判斷體型或自訂題目。\n- 評分標準：準時繳交占 60 分，功能完整性和亮點加分。\n\n這些內容幫助學習者掌握流程控制，並應用於實際項目中。",
    "BMI 計算公式：\nBMI = 體重（公斤） / (身高（公分） / 100)^2。\n\n範圍判斷：\n過輕 BMI < 18.5\n標準 18.5 ≤ BMI < 24\n過重 BMI ≥ 24。",
    "根據教學計畫內容，期中與期末相關的時間如下：\n\n期中專題提案：11月6日（第9週，線上進行）。\n\n期末作品展現：12月25日（第16週，線上進行）。",
    "上課講義中好像沒有提到相關內容，可以請教助教或老師，或是參考其他資源，例如網路上的教學文章或影片。",
  ];

  const sendMessage = () => {
    if (userMessage.value.trim()) {
      messages.value.push({ text: userMessage.value, sender: 'user' });
      loading.value = true;
      const responseIndex = (messages.value.length/2 - 1) % systemResponses.length;
      userMessage.value = '';
      scrollToBottom(); 

      setTimeout(() => { 
        messages.value.push({ text: systemResponses[responseIndex], sender: 'system' });
        loading.value = false;
        scrollToBottom();
      }, systemResponses[responseIndex].length*30);
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
  