<template>  
 <div class="mt-10">
   <div v-if="newsStore.loading" class="text-center p-12">
    <div class="flex flex-col items-center gap-4">      
      <UIcon name="i-svg-spinners-bars-fade" class="w-12 h-12 text-pretty" />
      <div class="animate-spin text-4xl mb-4">⏳</div>
      <p class="text-lg text-gray-700 dark:text-gray-300"> 뉴스를 불러오는 중...</p>
    </div>
    </div>
    <div v-else-if="newsStore.error" class="text-center p-12 text-red-500">
      ❌ 에러: {{ newsStore.error }}
    </div>
    <div v-else-if="!currentNews.length" class="text-center p-12">
      📭 뉴스가 없습니다
    </div>
    <!-- 뉴스 목록 -->
     <div v-else>
       <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla">       
         <app-news v-for="article in currentNews" :key="article.id" :data="article" />      
        </div>
    </div>
    <div class="flex justify-center mb-6">      
      <UPagination v-model="page" :page-count="Math.ceil(total / pageSize)" :total="total" @click="isTop" />
    </div>    
  </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '~/stores/useNews'
const newsStore = useNewsStore()
const { sortedNews, newsCount } = storeToRefs(newsStore)
// const { news } = storeToRefs(useNewsStore()) 
import type { NewsItem } from '~~/types/my-types'
import Id from './detailBlog/[id].vue'

// ID를 숫자로 변환
// function toIdNumber(id: NewsItem['id']): number {
//   if (typeof id === 'number') return id
//   if (typeof id === 'string') {
//     const n = Number(id)
//     return Number.isFinite(n) ? n : -1
//   } 
//   return -1
// }
// ID 기준 내림차순 정렬된 뉴스
// const sortedNews = computed<NewsItem[]>(() => {  
//   const items = newsData.value ?? []
//   return [...items]
//     .sort((a, b) => toIdNumber(b.id) - toIdNumber(a.id))
// })

const page = ref(1)  //현재페이지
const pageSize = ref(6) //페이지당 항목수
// const news = ref(result) //정렬된 전체 뉴스 자료
// const news = computed(() => sortedNews.value)
const total = computed(() => newsCount.value) //총 항목수

const currentNews = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return sortedNews.value.slice(start, start + pageSize.value); // 현재 페이지에 해당하는 뉴스 데이터
});
const isTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  newsStore.fetchNews()
})
// 데이터 로딩 완료 시 로그
if (import.meta.dev) {
  watch(sortedNews, (newValue) => {
    console.log('📊 Total news:', newValue.length)
  })
}


</script>
<style scoped>
.w-cal {
  width: calc(100%-96px);
}
.mt-center {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>