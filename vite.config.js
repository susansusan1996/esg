// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

export default defineConfig({
  base: "/my_front/", //github pages 路徑
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  server: {
    //使用 proxy 代理，解決跨域問題
    proxy: {
      "/api/twse": {
        target: "https://openapi.twse.com.tw/v1/opendata/t187ap46_L_1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/twse/, ""),
      },
    },
  },
});
