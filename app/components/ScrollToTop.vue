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
      <UButton
        v-if="isVisible"
        @click="scrollToTop"
        type="button"
        aria-label="상단으로 이동"
        size="xs"
        class="fixed bottom-6 right-6 z-50 flex flex-row items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer select-none border border-transparent active:scale-95 bg-green-600 hover:bg-green-700 text-green-100 dark:bg-green-200 dark:hover:bg-green-300 dark:text-green-900 dark:border-green-300"
      >
        <UIcon name="i-lucide-rocket" class="w-3 h-3 shrink-0" />
        <span>TOP</span>
      </UButton>
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
