<template>
  <div class="frame p-0 m-0 bg-black flex justify-center items-center">
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

const loggedIn = ref(true); 

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
}
</style>
