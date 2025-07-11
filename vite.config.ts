import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "SK Playground",
        short_name: "SKP",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#10b981",
        icons: [
          {
            src: "icon59.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon59.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});