<template>
  <div v-if="dataOk">
    <NavBar class="navbar" @refresh="onRefresh" />
    <div class="container-fluid" v-if="dataOk">
      <router-view></router-view>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";

import { ref } from "vue";

let dataOk = ref(true);

function onRefresh() {
  dataOk.value = false;
  setTimeout(() => {
    dataOk.value = true;
  }, 20);
}
</script>

<style scoped>
.container-fluid {
  padding-top: 60px; /* 讓內容不會被 navbar 擋住 */
}

.navbar {
  position: fixed; /* 固定位置 */
  top: 0; /* 固定在視窗頂端 */
  left: 0;
  width: 100%; /* 讓 navbar 橫跨整個畫面 */
  background-color: #333; /* 背景色 */
  color: white;
  z-index: 1000; /* 確保 navbar 在最上層 */
}
</style>
