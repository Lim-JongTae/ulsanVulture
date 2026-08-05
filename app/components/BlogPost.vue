<template>
  <div 
    ref="wrapperRef" 
    class="blog-wrapper shadow-xl relative overflow-hidden transition-all duration-700 transform scale-90 opacity-0 rounded-3xl border my-8 p-6 sm:p-8 md:p-10"
    :class="[
      post.welcomeScreen 
        ? 'bg-gradient-to-r from-slate-900 via-stone-900 to-emerald-950 text-white border-emerald-500/20' 
        : 'bg-gradient-to-br from-stone-100 via-amber-50/60 to-emerald-900/10 dark:from-zinc-900 dark:via-stone-900/90 dark:to-emerald-950/40 text-stone-800 dark:text-stone-100 border-amber-900/10 dark:border-amber-500/20'
    ]"
  >
    <!-- 3D Animation Background for Hero Section -->
    <Hero3DBackground v-if="post.welcomeScreen" />

    <div class="blog-content relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center">
        <div class="blog-title space-y-5 flex flex-col items-center text-center w-full">          
            <h2 v-if="post.welcomeScreen" class="roboto-font text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2 text-center">{{ post.title }}</h2>            
            <h2 v-else class="jua-font text-2xl sm:text-3xl font-bold text-stone-900 dark:text-amber-400 leading-snug mb-2 text-center">{{ post.blogTitle }}</h2>
            
            <p v-if="post.welcomeScreen" class="notosans-font post-title text-lg sm:text-xl font-medium text-stone-200 leading-relaxed text-center">{{ post.blogPost }}</p>            
            <div class="content-preview notosans-font text-lg sm:text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 leading-relaxed tracking-tight text-center" v-else v-html="post.blogHTML"></div>
            
            <NuxtLink class="link link-light font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 text-lg" v-if="!user" to="/auth/login">
              로그인/회원가입
              <UIcon name="i-heroicons-arrow-long-right-16-solid" class="w-7 h-7 ml-2 dark:invert arrow"/>
            </NuxtLink>      
            <div class="pt-2 flex justify-center w-full">
              <NuxtLink 
                class="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full font-bold text-base sm:text-lg bg-amber-700/10 dark:bg-amber-400/15 text-amber-900 dark:text-amber-300 border border-amber-700/20 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-slate-950 transition-all duration-300 shadow-md hover:scale-105"  
                :to="`/detailBlog/${post.id}`"
              >
                <span>게시물 보기</span>
                <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
              </NuxtLink>                                       
            </div>   
        </div>
    </div>
    <div class="blog-photo relative z-10 w-full flex-1 overflow-hidden flex items-center justify-center">
      <NuxtImg class="img rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 max-h-[380px] w-full object-cover" v-if="post.welcomeScreen" :src="`/blogPhotos/${post.photo}.jpg`" alt="Welcome Image" />
      <NuxtImg class="img rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 max-h-[380px] w-full object-cover" v-else :src="`/blogPhotos/${post.blogCoverPhoto}.jpg`" alt="CoverPhoto" />                        
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
const { user } = useUsersStore()
const wrapperRef = ref(null)

onMounted(() => {
  if (process.client && wrapperRef.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wrapperRef.value.classList.remove('scale-90', 'opacity-0')
          wrapperRef.value.classList.add('scale-100', 'opacity-100')
        }
      })
    }, {
      threshold: 0.1
    })
    observer.observe(wrapperRef.value)
  }
})
</script>
<style scoped>

.blog-wrapper {
  display: flex;
  flex-direction: column;
  min-height: auto;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  gap: 2rem;
}
.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 50%;
  order: 2;  
}

.blog-wrapper:nth-child(even) .blog-content {  
  order: 2;    
}
.blog-wrapper:nth-child(even) .blog-photo {  
  order: 1;  
}

.blog-title {
  width: 100%;
}

.content-preview :deep(p) {
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  margin: 0;
  text-align: center;
}

.link {
  @apply inline-flex items-center mt-4 pb-1 border border-solid 
    border-transparent delay-100 ease-in transition-all;
}

.link:hover {
  @apply border-b-slate-600 font-bold;
}

.link-light {
  @apply hover:border-b-slate-500;
}

.img {
  @apply block w-full object-cover rounded-2xl;
}

/* start media */
@media screen and (max-width: 699px) {
  .blog-wrapper {
    min-height: auto !important;
    padding: 1.5rem 1.25rem !important;
    gap: 1.5rem !important;
  }
  .blog-content {
    padding: 0 !important;
    flex: auto !important;
  }
  .img {
    max-height: 280px !important;
    object-fit: cover !important;
  }
}
@media screen and (min-width: 700px) {
  .blog-content {
    order: 1;
  }
  .blog-wrapper {
    @apply min-h-[380px] flex-row items-center justify-between gap-8 md:gap-12;
  }
  .blog-photo {
    order: 2;
    flex: 1 1 50%;
  }  
}

@media screen and (max-width: 600px) {  
  .blog-photo {
    padding: 0;
    order: 1;
    flex: auto;
    width: 100%;
  }
  .blog-photo .img:hover {
    transform: scale(1.03);
  }
  .blog-title {
    margin-top: 0;
  }
}
</style>

