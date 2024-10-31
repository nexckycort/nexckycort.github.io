import { defineConfig } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
  plugins: [pluginSass()],
  source: {
    entry: {
      index: './src/main.ts'
    }
  },
  html: {
    template: './public/index.html'
  },
  output: {
    cleanDistPath: true,
    inlineStyles: true
  }
})
