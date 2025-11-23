// @ts-check
import { defineConfig } from "astro/config";
import reactIntegration from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [reactIntegration()],
  vite: { plugins: [tailwindcss()] },
});
