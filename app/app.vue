<template>
  <div>    
    <!-- <ModalEvent v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal" /> -->
    
    <NuxtLoadingIndicator />    
    <UNotifications />
    <NuxtLayout>   
      <NuxtPage />        
    </NuxtLayout>
    <ScrollToTop />
  </div>
</template>
<script setup>
const useStore = useUsersStore()
const cardStore = useGetCardStore()

// const modalActive = ref(true)
const modalMessage = ref('')
// const startModal = () => {
//   modalActive.value = true
//   modalMessage.value = "정원이 초과되어 마감되었습니다."
// }
const closeModal = () => {
  modalActive.value = false  
}

onBeforeMount(() => {
  useStore.getCurrentUser()     
})

onMounted(() => {
  cardStore.getPost()
  // startModal()  
})

</script>

