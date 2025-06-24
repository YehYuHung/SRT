<template>
  <div class="template-container">
    <h1>{{ msg }}</h1>

    <!-- 6. Rerender View -->
    <div class="form-container">
      <form @submit.prevent="handleOut">
        <h3>表單測試</h3>
        <div class="div_text">
          <label for="username">帳號</label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div class="div_text">
          <label for="password">密碼</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button type="submit">送出</button>
      </form>
    </div>

    <!-- 1. Click Button -->
    <button @click="clickButton">Outside Button</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReportView",
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleOut() {
      alert(`輸入帳號 : ${this.username}\n輸入密碼 : ${this.password}`);
    },
    clickButton() {
      axios({
        url: "https://srtserver-production.up.railway.app/excel",
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          const disposition = response.headers["content-disposition"] || "";
          const matches = disposition.match(/filename="?([^"]+)"?/);
          const fileName = matches
            ? decodeURIComponent(matches[1])
            : new Date().toISOString().split("T")[0] + "_test.xlsx";

          const blob = new Blob([response.data], {
            type: "application/vnd.ms-excel",
          });
          const href = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = href;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        })
        .catch((err) => {
          console.error("下載失敗：", err);
        });
    },
  },
};
</script>

<style scoped>
.form-container {
  border: 5px solid black;
  border-radius: 1rem;
  margin: 2% 10%;
  padding: 1rem;
}

.div_text {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

input {
  flex: 1;
  margin-left: 1rem;
}
</style>
