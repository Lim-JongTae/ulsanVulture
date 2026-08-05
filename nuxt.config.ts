// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  }, 
  experimental: {
   sharedPrerenderData: false,
   compileTemplate: true,
   resetAsyncDataToUndefined: true,
   templateUtils: true,
   relativeWatchPaths: true,    
   defaults: {
     useAsyncData: {
       deep: true
     }
   }
 }, 

  app: {
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: '울산독수리.com - 태화강 독수리 월동 및 생태학교',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'naver-site-verification', content: 'YOUR_NAVER_VERIFICATION_CODE' },
        { 
          name: 'description', 
          content: '매년 11월 몽골에서 울산으로 날아오는 천연기념물 독수리 관찰 정보와 독수리학교 체험 예약, 실시간 현황을 만나보세요.' 
        },
        { property: 'og:title', content: '울산독수리.com - 태화강 독수리 월동 및 생태학교' },
        { property: 'og:description', content: '천연기념물 독수리 보호 및 녹색에너지 생태 교육 시민 공동체 활동' },
        { property: 'og:image', content: 'https://울산독수리.com/og_2.jpg' },
        { property: 'og:url', content: 'https://울산독수리.com' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'canonical', href: 'https://울산독수리.com' },
        {
          rel: 'manifest',
          href: '/manifest.webmanifest'
        }
      ],
      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9938049374204211',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false
  //   }
  // },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true,
    timeline: {
      enabled: true
    }
   },
   runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      vapiKey: process.env.FIREBASE_MESSAGE_KEY,
      spreadsheetUrl: process.env.SHEET_URL
    }
   },
  modules: [
   '@nuxt/ui',
   '@nuxt/image',
   '@pinia/nuxt',   
   '@nuxt/fonts',
   '@nuxtjs/color-mode', 
   'nuxt-mdi',
   'nuxt-icon'
  ],  
  css: [
    '~/assets/css/global.css', '~/assets/css/tailwind.css',   
  ],
  colorMode: {
    classSuffix: ''
  },  
  plugins: [
    '~/plugins/firebase.client.js'    
  ],
  build: {
    transpile:['@mdi/font'],
  },
  mdi: {
    componentName: 'MdiIcon',
    defaultSize: '1rem'
  },
  // app: {
  //   head: {
  //     title: '%s - 울산독수리',
  //     meta: [
  //       { charset: 'utf-8' },
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' },     
  //       { 
  //         hid: 'description',
  //         name: 'description', 
  //         content: '울산독수리 보호및 녹색에너지 교육활동' 
  //       },
  //       { 
  //         hid: 'og:title',
  //         property:'og:title',
  //         content: '함께해요~~울산독수리 보호및 생물다양성 지킴이활동' 
  //       },
  //       { 
  //         hid: 'og:description',
  //         property:'og:description',
  //         content: '지속가능한개발목표(SDGs),생물다양성,기후변화대처' 
  //       },
  //       {
  //         hid: 'og:image',
  //         property: 'og:image',
  //         content: 'https://github.com/Lim-JongTae/vulture/blob/main/public/og_2.jpg?raw=true',
  //       },
  //       {
  //         hid: 'og:url',
  //         property: 'og:url',
  //         content: 'https://울산독수리.com',
  //       },
          
  //     ]  
  //   }
  // }
})