import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// AVIF encoding is slow (~5 s per large image at the default effort). In dev, images are
// encoded on demand, so use the fastest effort there; builds keep the best compression.
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
  site: "https://sergioar.dev",
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
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
  prefetch: true,
});
