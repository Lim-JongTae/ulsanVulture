<template>
  <div class="card dark:bg-gray-700 bg-slate-50" @click="openSite">
    <NuxtLink :to="data.url" target="_blank">
      <div class="w-auto min-h-full rounded-xl ">
        <img v-if="data.urlToImage" :src="data.urlToImage" alt="" class="w-392 h-[260px] rounded-xl img-edit" />
        <div v-else class="flex-ce-ce text-gray-800 dark:text-gray-300 no-img"><span class="mt-40">등록된 이미지가 없습니다.</span></div>     
      </div>
      <div class="flex-ce-ce flex-col w-full">
        <div class="flex flex-ce-st flex-col w-full h-[88px] gap-2">
            <div class="flex flex-ce-st w-full gap-2 ">
              <img :src="logo" alt="" class="w-[20px] h-[20px] rounded-3xl bg-white dark:bg-gray-500" />
              <span class="notosans-font flex-ce-ce text-sm text-gray-900 font-semibold dark:text-gray-50">{{ data.name }}</span>
            </div>
            <span class="text-center notosans-font flex-ce-st w-full h-[48px] text-gray-950 overflow-hidden whitespace-normal text-ellipsis text-line dark:text-gray-50">{{ data.title }}</span>
        </div>
        <div class="w-full h-[84px]">
            <span class="w-full h-full text-xs text-gray-700 overflow-hidden text-ellipsis whitespace-normal text-line text-left pl-2">
              <span class="poppins-font dark:text-gray-100">{{ data.content }}</span>
            </span>
        </div>
      </div>
      <div class="flex-ce-st w-full h-[40px] gap-2">
        <div class="flex-ce-ce">
          <UIcon name="i-heroicons-user-group" class="w-[32px] h-[32px] rounded-3xl" />
        </div>
        <div class="flex-ce-st flex-col">
          <span class=" text-xs text-gray-900 dark:text-gray-100">{{ data.author }}</span>
          <span class="text-xs text-gray-400 dark:text-gray-50">{{ dayjs(data.publishedAt).format('YYYY-MM-DD HH:mm:ss') }}</span>        
        </div>
      </div>
    </NuxtLink>    
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const props = defineProps({
  data: {
    type: Object,    
    Required: true,
    // 배열 새로 생성
    dafault: () => []
  },
})

const website = computed(() => {  
  try {
    return props.data.url.split("https://").pop().split("/")[0] || ""
  } catch (error) {
   console.log(error)
   return
  }
})
const logo = computed(() => {  
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16` 
})

</script>

<style scoped>
 .card {
  display: flex;
  justify-content: start;
  align-self: start;
  flex-direction: column;
  margin-top: 5px;
  gap: 15px;
  padding: 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  width: 440px;
 }
.text-line {
  overflow: hidden; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: keep-all; 
  /* // 문단으로 끊어져서 줄바꿈 됨 */
}
.img-edit {
  margin: auto;
  object-fit: contain;
  border-radius: 8px;  
}
.no-img {
  background: url(/logo_100.png) no-repeat;   
  width: 100%;
  height: 260px;
  background-position: center;
  object-fit: cover; 
}
</style>