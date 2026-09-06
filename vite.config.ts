import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [vinext(), nitro({ preset: "vercel" })],
});
