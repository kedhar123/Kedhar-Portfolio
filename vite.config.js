import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false, // Optional: reduces build size
  },
  base: "./", // Ensures assets load correctly
});
