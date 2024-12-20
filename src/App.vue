<template>
  <div class="frame p-0 m-0 flex justify-center items-center">
    <div class="h-full w-full p-0 m-0 flex">
      <Chat v-if="loggedIn" />
      <NotLoggedIn v-else />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Chat from './views/Chat.vue';
import NotLoggedIn from './views/NotLoggedIn.vue';
import axios from 'axios';

const loggedIn = ref(true); 

const getCookies = () =>{
  const domain = "https://ncueeclass.ncu.edu.tw";
  chrome.cookies.get({ name: "account", url: domain }, (cookie) => {
    if (cookie && cookie.value) {
      console.log(`account:`, cookie.value);
      loggedIn.value = true; 
    } else {
      console.log(`account not found`);
    }
  });
}

getCookies()
</script>

<style scoped>
.frame {
  width: 250px;
  height: 480px;
  background: linear-gradient(to bottom right, #800080, #4b0082); /* Purple gradient */
}
</style>
