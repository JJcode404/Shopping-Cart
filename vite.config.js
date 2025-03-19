import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js", // Ensures a stable output filename
      },
    },
  },
  resolve: {
    alias: {
      fs: "browserify-fs", // Example for fixing `fs` module
    },
  },
});
