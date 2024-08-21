import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/drufilaPortfolio",
  plugins: [react()],
  server: {
    port: 4000,
  },
  base: "/drufilaPortfolio",
});
