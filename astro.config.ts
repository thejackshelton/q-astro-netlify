import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  adapter: netlify(),
});
