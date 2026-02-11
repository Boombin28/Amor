# Amor's Atelier (MVP)

基于 `Astro` 的个人网站第一版原型，面向长期写作与视觉展示。  
主题方向：设计、艺术、哲学、文学。

## 当前能力

- 内容驱动：文章列表 + 动态文章页（基于 Astro Content Collection）
- 视觉基础：非模板化首页、媒体页、关于页
- 动效基础：页面过渡 + 区块滚动显现 + 卡片悬停交互
- 媒体能力：图片画廊 + 视频播放器占位（可替换为真实素材）

## 启动与构建

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

> 脚本里已内置 `ASTRO_TELEMETRY_DISABLED=1`，避免受限环境下写入系统目录导致报错。

## 目录说明

```text
/
├── public/
│   └── media/                     # 图片/视频占位素材
├── src/
│   ├── components/
│   │   └── PostCard.astro         # 文章卡片组件
│   ├── content/
│   │   └── journal/               # 文章 Markdown 内容
│   ├── layouts/
│   │   └── BaseLayout.astro       # 全站布局
│   ├── pages/
│   │   ├── index.astro            # 首页
│   │   ├── writings/
│   │   │   ├── index.astro        # 文章列表
│   │   │   └── [slug].astro       # 文章详情
│   │   ├── media.astro            # 影像页
│   │   └── about.astro            # 关于页
│   ├── styles/
│   │   └── global.css             # 全局样式
│   └── content.config.ts          # 内容集合 schema
└── astro.config.mjs
```

## 如何新增文章

1. 在 `src/content/journal/` 新建一个 `.md` 文件。
2. 参考已有文件填写 frontmatter：

```md
---
title: 文章标题
excerpt: 摘要
date: 2026-02-10
tags: ["标签1", "标签2"]
readingTime: 5 min
---
正文内容...
```

## 如何添加你自己的照片与视频

1. 图片放到 `public/media/`，然后在 `/src/pages/media.astro` 中替换图片路径。
2. 视频文件命名为 `demo-reel.mp4` 放到 `public/media/`：

```text
public/media/demo-reel.mp4
```

播放器会自动读取该文件。

## 下一步（建议）

1. 接入 Cloudflare Pages 做部署。
2. 将图片迁移到 Cloudflare Images（自动压缩和尺寸变换）。
3. 将视频迁移到 Cloudflare Stream（更稳定的转码与播放）。
4. 增加文章标签筛选、搜索与 RSS。
