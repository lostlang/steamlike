import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8001,
  },
  preview: {
    port: 8001,
  },
  plugins: [sveltekit()],
});
