import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'IlPas Docs',
  description: 'Just playing around.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news' },
      { text: 'Video Tutorial', link: '/video-tutorial' },
      { text: 'Contatti', link: '/contacts' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduzione',
          children: [
            { text: "Che cos'è ilpas Docs?", link: '/apps/what' },
            { text: 'Perche ilpas Docs?', link: '/apps/why' },
          ],
        },
        {
          text: 'Applicazioni',
          children: [
            { text: 'Audiosoft Go', link: '/apps/go' },
            { text: 'Audiosoft Calendar', link: '/apps/calendar' },
            { text: 'Minosse', link: '/apps/minosse' },
            { text: 'Smart Hearing Test', link: '/apps/sht' },
            { text: 'Audiosoft Analytics', link: '/apps/analytics' },
          ],
        },
      ],
    },
  },
});
