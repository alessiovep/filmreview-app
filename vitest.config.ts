// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        css: false,
        alias: {
            // In case you need to mock other styles later
            '^.+\\.(css|less|scss|sass)$': './__mocks__/styleMock.js'
        }
    }
});
