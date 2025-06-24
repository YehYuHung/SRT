<template>
  <div class="container">
    <!-- 
      畫面卡住原因：
      router-view 掛載元件若 setup() 中未回傳任何內容（例如資料未 return 或 async setup 出錯），
      將導致空白或卡畫。
      解決方式可參考：
      https://blog.csdn.net/qq_43780761/article/details/126126672
    -->
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "@/components/NavbarComponent.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
