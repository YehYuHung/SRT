<template>
  <nav>
    <ul class="nav nav-pills nav-justified">
      <li v-for="item in navItems" :key="item.name" role="presentation">
        <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { name: "index", label: "首頁" },
  { name: "report", label: "報表" },
  { name: "complexPart", label: "測試" },
  { name: "grid", label: "檢視" },
  { name: "ajax", label: "API" },
];
</script>

<style scoped></style>
