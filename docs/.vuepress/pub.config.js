module.exports = {
  title: 'Rebel Coding',
  description: 'Rebel Coding',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    activeHeaderLinks: true,
    displayAllHeaders: false,
    sidebar: [
      {
        title: 'Welcome', 
        path: '/welcome/', 
      },
      {
        title: 'the Books',
        path: '/books/',
        collapsable: true, 
        children: [
          ['/books/', 'Why? Why? Why?'],
          ['/books/justthebasics', 'Just the Basics'],
          ['/books/eyn2k', 'Everything You Need to Know'],
          '/books/process'
        ]
      },
      {
        title: 'Everything You Need to Know',
        path: '/eyn2k/',
        sidebarDepth: 2,
        children: [
          ['/eyn2k/', 'The First Steps'],
          ['/eyn2k/orientation', 'Orientation'],
          ['/eyn2k/termintro', 'Intro to CLI'],
          ['/eyn2k/step1', 'Step 1: HTML & CSS'],
          ['/eyn2k/step2', 'Step 2: JavaScript'],
          ['/eyn2k/step3', 'Step 3: Python Scrapers'],
          ['/eyn2k/step4', 'Step 4: The Full Stack'],
          ['/eyn2k/step5', 'Step 5: Server / Django'],
          ['/eyn2k/step6', 'Step 6: Client / VueJS'],
          ['/eyn2k/step7', 'Step 7: Resumes & Project Work'],
          ['/eyn2k/step8', 'Step 8: Operating Systems & Deployment'],
          ['/eyn2k/appendices', 'Appendices']        
        ]
      },
      {
        title: 'the Lab',
        path: '/lab/',
      },
      {
        title: 'the Community',
        path: '/community/',
        sidebarDepth: 1,
        children: [
          ['/community/', 'Discord'],
          ['/community/projects', 'Projects'],
          ['/community/resources', 'Resources'],     
        ]
      },
      {
        title: 'About',
        path: '/about/',
        sidebarDepth: 1,
        children: [
          '/about/',
          ['/about/marketing', 'Marketing'],
          ['/about/outreach/', 'Outreach'],
          ['/about/notes', 'Notes'], 
          '/about/cultureclap',      
        ]
      },
    ],
    nav: [
      { text: 'Books', link: '/books/' },
      { text: 'EYN2K', link: '/eyn2k/' },
      { text: 'Lab', link: '/lab/' },
      { text: 'Community', link: '/community/' },
      { text: 'About', link: '/about/' },
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' 
      },
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  head : [
    ['script', {src: 'https://gumroad.com/js/gumroad.js'}]
  ]
}
