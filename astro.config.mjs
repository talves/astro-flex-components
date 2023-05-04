import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    rollupOptions: {
      external: /^@microsoft\/fast-(element|components)/,
    },
  },
});
