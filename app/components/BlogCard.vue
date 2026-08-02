<template>
  <div ref="cardRef" class="blog-card transition-all duration-700 transform scale-85 opacity-0">       
    <div class="icons" v-show="editPost">
      <div class="icon" @click="editBlog">
        <UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-green-700"  />        
      </div>     
      <div @click="deletePost" class="icon">
        <UIcon name="i-heroicons-trash" class="w-6 h-6 text-amber-700" />
      </div>
     </div>
    <NuxtImg class="img" :src="post.blogCoverPhoto" alt="Cover Photo" />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>게시일: {{ new Date(post.blogDate).toLocaleString('ko-KR', { dateStyle: 'long'}) }}</h6>      
      <NuxtLink class="link" :to="`/detailCard/${post.blogID}`">
        상세보기<UIcon name="i-heroicons-arrow-long-right-16-solid" class="ml-4 w-7 h-7" />
      </NuxtLink>       
    </div>
  </div>
</template>
<script setup>

const postStore = usePostStore()
const cardStore = useGetCardStore()
const toast = useToast()
const router = useRouter()
const route = useRoute()
const cardRef = ref(null)

onMounted(() => {
  if (process.client && cardRef.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardRef.value.classList.remove('scale-85', 'opacity-0')
          cardRef.value.classList.add('scale-100', 'opacity-100')
        }
      })
    }, {
      threshold: 0.1
    })
    observer.observe(cardRef.value)
  }
})
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const editPost = computed(() => {
  return cardStore.editPost
})
const editBlog = () => {  
  // console.log('editBlog', props.post.blogID)
  router.push(`/editBlog/${props.post.blogID}`)
}

const deletePost = async () => {
  if (!props.post || !props.post.blogID) {
    console.log('삭제할 PostID가 없습니다.', error)
    return
  }
  if (confirm('정말 삭제하시겠습니까?')) {
    try {
      await cardStore.deletePost(props.post.blogID)
      toast.add({
        type:'success',
        title: '포스트가 성공적으로 삭제되었습니다.!',        
        duration: 1500,
        callback: async () => {
          await navigateTo('/views/blogs')
        }       
      })
    } catch (error) {
      console.error('삭제중 오류 발생:', error)
    }
  }  
}
</script>
<script>

// import firebase from 'firebase/app'
// import 'firebase/storage'
// const props = defineProps({
//   limit: {
//     type: Number,
//     default: null
//   }
// })
   
  // methods: {
  //   deletePost() {
  //     if ( confirm('정말 삭제하시겠습니까?') ==  true) {              
  //       const storageRef = firebase.storage().ref()
  //       // const docRef = storageRef.child('this.post.blogCoverPhoto')    
  //       // (`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`)
  //       const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.post.blogCoverPhotoName}`)   
       
  //       docRef.delete()
  //       this.$store.dispatch('deletePost', this.post.blogID)                          
       
  //     } else { alert('삭제가 취소되었습니다.')}
  //   },
  //   editBlog() {
  //     this.$router.push({ name: 'EditBlog', params: { blogid: this.post.blogID } })
  //   },
  // },
  // computed: {
  //   editPost() {
  //     return this.$store.state.editPost
  //   }
  // }
  // const posts = computed (() => {
  //   if (!data.value) {
  //     return []
  //   }
</script>
<style scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: .5s ease all;
  z-index: 10;  
}
.blog-card :hover {
  transform: rotateZ(-1deg) scale(1.05);
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0,0,0,0.1), 0 0.2rem 0.4rem -0.1rem rgba(0,0,0,0.006);
}
.icons {
  @apply flex absolute top-[10px] right-[10px] z-30
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  transition: .5s ease all;  
 }
.icons :hover {
  /* background-color: orange; */
  color: black;
}
.icon:nth-child(1) {
  margin-right: 10px;
}
.img {
  @apply block border-t-8 border-l-8 border-b-0 border-r-8 z-10 w-full min-h-[200px] object-cover
}
.info {
  @apply flex flex-col h-full z-10 py-8 px-4 text-slate-950
}
.info h4 {
  @apply pb-2 text-xl font-semibold
}
.info h6 {
  @apply pb-2 text-sm font-bold
}
.link {
  @apply inline-flex items-center mt-auto font-bold pt-5 text-xs pb-1 duration-500 ease-in transition-all
}
.link :hover {
  color: rgba(48,48,48,0.8)
}
</style>