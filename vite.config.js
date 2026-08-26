import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: process.env.GITHUB_ACTIONS
    ? "/Nathan-Frontend-Developer/"
    : "/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});

