import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Linha nova e necessária

export default defineConfig({
  plugins: [react()], // O seu já tem
  base: "/static/",    // O seu já tem
  build: {             // O seu já tem
    outDir: "dist",
    manifest: true,
  },
  resolve: {           // Seção nova e essencial
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});