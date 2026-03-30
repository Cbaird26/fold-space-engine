import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built app works under GitHub Pages subpaths, e.g.
// https://cbaird26.github.io/toe-2026-updates/fold-space-engine/
export default defineConfig({
  plugins: [react()],
  base: "./",
  test: {
    environment: "node",
    include: ["src/**/*.test.js"],
  },
});
