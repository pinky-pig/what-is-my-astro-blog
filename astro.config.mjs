import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import UnoCss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCss({
      injectReset: false,
    }),
    vue(),
  ],
})
