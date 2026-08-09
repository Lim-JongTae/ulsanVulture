<template>
  <ClientOnly>
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <button
        v-if="isVisible"
        @click="scrollToTop"
        type="button"
        aria-label="상단으로 이동"
        class="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center w-11 h-11 bg-gray-600 hover:bg-gray-700 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer select-none border border-transparent dark:border-gray-200 active:scale-95"
      >
        <span class="text-sm font-black leading-none -mb-0.5">^</span>
        <span class="text-[10px] font-black tracking-wider leading-none">TOP</span>
      </button>
    </Transition>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isVisible.value = window.scrollY > 200
  }
}

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
