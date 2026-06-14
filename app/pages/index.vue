<template>
  <div class="home">   
    <blog-post :post="welcomeScreen" />     
    <div class="mt-2 mb-10 sm:mt-10 sm:mb-10">
      <!-- <NuxtImg src="/notice.png" class="mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-all" size="100vw sm:50vw md:600px" /> -->
      <!-- <NuxtLink to="https://forms.gle/hhvh7FvVexCHbPJz7" target="_blank" >
        <UButton class="mt-2 font-semibold text-xl" size="lg" @click="handleNotice"><img src="/logo_100.png" alt="" width="22">2026년 독수리학교 접수하기(클릭)</UButton>
      </NuxtLink> -->
     
        <!-- <UButton 
          @click="endNotice"
          class="mt-2 font-semibold shadow-lg text-md flex flex-col items-center justify-center text-center space-y-1 mx-auto md:flex-row md:space-y-0 md:space-x-3 md:items-center md:text-left" size="lg"><img src="/logo_100.png" alt="" width="22" 
          >2026년 독수리학교 접수가 
          <span class="text-pink-500 underline font-bold animate-[blink_1s_steps(10,start)_infinite]">
              마감되었습니다.</span>
          <p>감사합니다.</p>
        </UButton> -->
      
      <!-- <NuxtLink to="/survey" target="_blank" >
        <UButton class="mt-2 font-semibold text-xl" size="lg" @click="handleNotice"><img src="/logo_100.png" alt="" width="22">독수리학교 설문 참여</UButton>
      </NuxtLink> -->
    </div> 
    <!-- <app-carousel />        -->
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />      
    <div class="mt-3"></div>
    <div class="blog-card-wrap">
      <div class="container">
      
        <h3 class="text-black">최근 블로그 소식</h3>
       
        <div class="blog-cards">
          <blog-card :post="post" v-for="(post, index) in cardStore.blogPosts" :key="index" />
        </div>
        <div class="text-center">
          <UButton class="mt-10" @click="handleClick">더 보기</UButton>
        </div>
      </div>
    </div>                 
    <div class="updates h-[300px] md:h-[250px] sm:h-[150px]">     
      <div class="container flex justify-between items-center">  
        <h2 class="jua-font">다음세대를 위한 생물다양성 보존과 생태계 복원<br><br> 시민여러분과 함께 이루어 갑니다</h2>                
          <UButton v-if="!pEmail" trailing size="xl" to="/auth/login" icon="i-heroicons-arrow-long-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            회 원 가 입    
          </UButton>
          <UButton v-else trailing size="xl" to="/donation" icon="i-heroicons-arrow-long-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            후 원 하 기    
          </UButton>       
      </div>
    </div>
  </div>
</template>

<script setup>

const postStore = usePostStore()
const cardStore = useGetCardStore()

const listUsersResult = ref(null)
const { sampleBlogPost, welcomeScreen } = storeToRefs(postStore)
const { pEmail } = useUsersStore()
// const blogPostsCards = computed(() => {
//   return cardStore.blogPostsCards
// })
const handleClick = () => {  
  cardStore.getNext()
}
const isOpen = ref(false)

const endNotice = () => {
  alert('접수가 마감되었습니다. 감사합니다.')
}

</script>

<style scoped>
/* .blog-card-wrap h3 {
  @apply text-xl font-semibold mb-8;
} */

.blog-card-wrap h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
h2 {
  font-weight: bold;
  font-size: 30px;
  max-width: 800px;
  width: 100%;  
  line-height: 500%;      
  margin-top: -120px;
  height: 100px;
}

@media screen and (max-width: 799px) { 
  .updates h2 {
    text-align: start;
    font-size: 1.25rem; /* text-xl */
    line-height: 1.75rem
  } 
}
@media screen and (min-width: 800px) {
  .updates h2 {
    text-align: start;
    font-size: 2.25rem; /* text-4xl */
    line-height: 2.5rem;
  } 
}
@media screen and (max-width: 640px) { 
  .updates  {
    height: 150px;
  } 
  .updates h2 {
    font-size: 1rem;
}
}
@media screen and (max-width: 400px) { 
    blog-card-wrap {
    margin-top: 10rem;
    padding-bottom: 0;
  }
}
</style>