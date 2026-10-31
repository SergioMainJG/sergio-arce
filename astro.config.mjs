import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const isDev = process.argv.includes("dev");

export default defineConfig({
  site: "https://sergio-arce.me",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-MX", en: "en-US" },
      },
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        avif: { effort: isDev ? 0 : 4 },
      },
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
