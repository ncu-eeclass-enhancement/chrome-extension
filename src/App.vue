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

// const api = axios.create({
//     baseURL: 'https://ncu-eeclass-enhancement.squidspirit.com/',
// });

// let f = await api.get('');
// console.log(f.status);

// chrome.cookies.get({ name: "account", url: "https://ncueeclass.ncu.edu.tw" }, (cookie) => {
//   if (cookie && cookie.value) {
//     loggedIn.value = true;
//     console.log("account", cookie.value);
//   }
// });
// chrome.cookies.get({ name: "PHPSESSID", url: "https://ncueeclass.ncu.edu.tw" }, (cookie) => {
//   if (cookie && cookie.value) {
//     console.log("PHPSESSID", cookie.value);
//   }
// });
// chrome.cookies.get({ name: "accesstoken", url: "https://ncueeclass.ncu.edu.tw" }, (cookie) => {
//   if (cookie && cookie.value) {
//     console.log("accesstoken", cookie.value);
//   }
// });

</script>

<style scoped>
.frame {
  width: 250px;
  height: 480px;
  background: linear-gradient(to bottom right, #800080, #4b0082); /* Purple gradient */
}
</style>
