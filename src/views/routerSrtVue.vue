<script>
// routerSrt.js
const routerSrt = [
  // 根路徑自動導向 /srt/
  {
    name: "default",
    path: "/",
    redirect: { name: "index" },
  },

  // 主畫面
  {
    name: "index",
    path: "/srt/",
    component: () => import("@/views/SRT/IndexView.vue"),
  },

  // 報表畫面
  {
    name: "report",
    path: "/srt/Report/",
    component: () => import("@/views/SRT/ReportView.vue"),
  },

  // 複雜區塊測試
  {
    name: "complexPart",
    path: "/srt/complexPart/",
    component: () => import("@/views/SRT/complexPartView.vue"),
  },

  // Grid 檢視畫面
  {
    name: "grid",
    path: "/srt/AsGrid/",
    component: () => import("@/views/SRT/AsGridView.vue"),
    // children 可在此擴充
    // children: [{ path: '', name: 'user', component: UserHome }]
  },

  // 資料新增畫面（支援 keep-alive）
  {
    name: "insert",
    path: "/srt/Insert/",
    component: () => import("@/views/SRT/InsertView.vue"),
  },

  // 傳參數畫面，支援可選 storeId（數字）
  {
    name: "passing",
    path: "/srt/Pass/:storeId(\\d+)?",
    component: () => import("@/views/SRT/InsertView.vue"),
  },

  // AJAX 測試畫面
  {
    name: "ajax",
    path: "/srt/ajax/",
    component: () => import("@/views/SRT/AjaxPostView.vue"),
  },
];

export default routerSrt;

// SPA 與 MPA 差別 以及history/hash原理
// https://ithelp.ithome.com.tw/articles/10277447?sc=pt
// 處理history refresh失敗方法
// https://ithelp.ithome.com.tw/articles/10214449
// 最新處理 請查看 index.html
</script>
