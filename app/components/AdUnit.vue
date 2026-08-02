<template>
  <ClientOnly>
    <ins
      ref="adRef"
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-9938049374204211"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  slot: {
    type: String,
    required: true
  }
})

const adRef = ref(null)

onMounted(() => {
  try {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    console.error('AdSense push failed', e)
  }
})
</script>
