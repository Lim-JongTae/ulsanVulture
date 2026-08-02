<template>
  <div>                
    <AppNavNew />        
    <main class="main-content">
      <slot />            
    </main>  
    <AppFooter /> 
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'with Ulsan Vulture',
  description: '울산독수리 보호및 녹색에너지 교육활동',
  ogTitle: 'With 울산독수리',
  ogDescription: '지속가능한개발목표(SDGs),생물다양성,기후변화대처',  
  ogImage: 'https://github.com/Lim-JongTae/vulture/blob/main/public/og_2.jpg?raw=true',
  ogUrl: 'https://울산독수리.com',
  ogLocale: 'ko_KR',
  ogSite_name: 'With울산독수리',
  twitterTitle: '울산독수리',
  twitterDescription: '울산독수리',
  twitterImage: '울산독수리',
  twitterCard: '울산독수리'
})

useHead({
  titleTemplate: '%s - 울산독수리',
  htmlAttrs: {
    lang: 'ko'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style scoped>
.main-content {
  padding-top: calc(var(--header-height, 0.5rem));
}
</style>