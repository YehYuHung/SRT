const path = require("path");

module.exports = {
  // 部署路徑設定，例如 GitHub Pages 就會需要 /SRT/
  publicPath: process.env.NODE_ENV === "production" ? "/SRT/" : "/",

  // 修正 build 時出現 transpileDependencies.map 錯誤
  transpileDependencies: [],

  // 開啟 runtime compiler（如果你有用到 `template:` 直接編譯 template 字串）
  runtimeCompiler: false,

  // 自訂 Webpack 設定（非必須）
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },

  // 關掉 ESLint on save（可選）
  lintOnSave: true,
};
