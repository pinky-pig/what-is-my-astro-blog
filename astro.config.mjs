import fs from 'fs'
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import UnoCss from 'unocss/astro'

import { parse } from 'node-html-parser'
import dayjs from 'dayjs'
import { createApi } from 'unsplash-js'
import { SITE, UnsplashSetting } from './src/config'

const unsplash = createApi({
  accessKey: UnsplashSetting.AccessKey,
})

function defaultLayoutPlugin() {
  return function (tree, file) {
    const filePath = file.history[0]

    if (!filePath.includes('/src/pages/posts/'))
      return

    file.data.astro.frontmatter.layout = '/src/layouts/post.astro'

    // 头图放到文档中的第一行，会自动帮你处理，也可以用 frontmatter 方式，赋值给 pic 字段
    if (tree.children[0]?.value) {
      const imageElement = parse(tree.children[0].value).querySelector('img')

      // file.data.astro.frontmatter.pic = imageElement?.getAttribute('src')

      if (imageElement?.getAttribute('src')) {
        file.data.astro.frontmatter.pic = imageElement?.getAttribute('src')
      }
      else {
        unsplash.photos.getRandom().then((res) => {
          if (res.status === 200 && res.type === 'success')
            file.data.astro.frontmatter.pic = res?.response?.urls?.regular
        })
      }
    }

    // 描述放到文档中头图的下一行，会自动帮你处理，也可以用 frontmatter 方式，赋值给 desc 字段
    if (tree.children[1]?.children[1]?.value)
      file.data.astro.frontmatter.desc = tree.children[1].children[1].value

    const { date, desc, pic } = file.data.astro.frontmatter

    // 兼容没有描述情况
    if (!desc)
      file.data.astro.frontmatter.desc = SITE.description

    // 兼容没有头图的情况
    if (!pic) {
      // unsplash.photos.getRandom().then((res) => {
      //   if (res.status === 200 && res.type === 'success')
      //     file.data.astro.frontmatter.pic = res?.response?.urls?.regular
      // })
      // file.data.astro.frontmatter.pic = SITE.pic
    }

    // 这里也可以直接在 frontmatter，赋值给 date 字段
    if (!date) {
      const createDate = dayjs(fs.statSync(filePath).birthtime).format(
        'YYYY/MM/DD',
      )
      // 这里特殊处理了下，因为之前的weekly迁移过来后，createDate不对了，通过规律重写了下，100期以后直接读取
      if (SITE.repo === 'pinky-pig/what-is-my-astro-blog') {
        const num = filePath.split('/posts/')[1]?.split('-')[0]
        if (num < 100) {
          file.data.astro.frontmatter.date = dayjs('2022-10-10')
            .subtract(100 - num, 'week')
            .format('YYYY/MM/DD')
        }
        else {
          file.data.astro.frontmatter.date = createDate
        }
        // 对于110期以后的，由于原有封面图不支持twitter，这里兼容一下
        if (num >= 110)
          file.data.astro.frontmatter.twitterImg = `https://weekly.tw93.fun/assets/${num}.jpg`
      }
      else {
        file.data.astro.frontmatter.date = createDate
      }
    }
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCss({
      injectReset: false,
    }),
    vue(),
  ],

  markdown: {
    remarkPlugins: [defaultLayoutPlugin],
    extendDefaultPlugins: true,
  },
})
