// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Ajusta `site` al dominio final antes de publicar (mejora SEO y sitemap).
  site: "https://agenciavintagedeseguros.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
