import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eruda from 'vite-plugin-eruda'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eruda()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
