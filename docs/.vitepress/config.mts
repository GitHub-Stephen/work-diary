import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Work Diary",
  description: "A pencil Not A memory",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/harness' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '2024', link: '/2024' },
          { text: 'harness', link: '/harness' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
