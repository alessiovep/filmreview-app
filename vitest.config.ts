// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    test: {
        pool: "vmThreads",
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
    },
});
