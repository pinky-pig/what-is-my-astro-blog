# 博客

<p align="center">
  <a href="https://what-is-my-astro-blog.vercel.app/">
    <img src="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230313124940.png" alt="blog" width="400" />
  </a>
</p>

> 记录个人生活的周刊网站~  
> fork 自 [tw93](https://github.com/tw93/weekly)

- 🌻 [第 1 期 - 首次记录](https://github.com/pinky-pig/what-is-my-astro-blog/blob/master/src/pages/posts/01-%E9%A6%96%E6%AC%A1%E8%AE%B0%E5%BD%95.md)
- 🍑 

<!-- [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics) -->
[![Preview in Github Pages](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://what-is-my-astro-blog.vercel.app/)
[![Open GitHub Repo](https://github.com/codespaces/badge.svg)](https://github.com/pinky-pig/what-is-my-astro-blog)

## 发布流程

- 找到 `/src/pages/posts/` 文件夹下，新增博客，可以直接复制粘贴一个文件 `01-首次记录` ，然后再改一下主题名字 "首次记录" -> "今日盛况"，再去修改文件内的内容。
- 添加好内容后 `npm run dev` 启动代码，查看网站
- `npm run build` 打包
- `npm run preview` 预览
- 提交，这里是直接挂载到 `vercel` 了，就不用主动 deploy 了


## 🚀 博客结构

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Card.astro
│   │   └── LeftSidebar.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── post.astro
│   └── pages/
│       ├── posts/
│       ├── profile/
│       └── index.astro
└── package.json
```
