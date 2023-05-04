# Astro Starter (Typescript, fast-components)

```
yarn create astro@latest -- --template minimal
// Use typescript with strict mode
yarn add @microsoft/fast-components @microsoft/fast-foundation @microsoft/fast-element
```

Add the config options to the `astro.config.mjs` for vite

```js
export default defineConfig({
  vite: {
    plugins: [],
    rollupOptions: {
      external: /^@microsoft\/fast-(element|components)/,
    },
  },
});
```

Add any client script imports on your page or in your layout to use the components

```html
<script>
  import {
    provideFASTDesignSystem,
    fastCard,
    fastButton,
  } from "@microsoft/fast-components";

  provideFASTDesignSystem().register(fastCard(), fastButton());
</script>
```
