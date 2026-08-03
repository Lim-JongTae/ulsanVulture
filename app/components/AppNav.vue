<template>
  <header class="header">
    <NuxtLink to="/"> 
      <div class="logo-text">
        <NuxtImg class="logo" src="/logo.png" width="30px" format="Webp" /> 
        <span class="lobster-regular text-3xl ml-2">With</span>
        <span class="bagel-fat-one-regular text-3xl ml-2">울산독수리</span>        
      </div>
    </NuxtLink>
    <input type="checkbox" id= "check" />
    <label for="check" class="icons">
      <UIcon name="i-heroicons-bars-3-16-solid" class="w-7 h-7" id= "menu-icon"/>
      <UIcon name="i-heroicons-x-mark-16-solid" class="w-7 h-7" id= "close-icon" />
    </label>
     
    <nav class="navbar">  
      <NuxtLink style="--i:0;" to="/" class="link">Home</NuxtLink>
      <NuxtLink style="--i:1;" to="/views/blogs" class="link">Blogs</NuxtLink>
      <NuxtLink style="--i:2;" to="/createPost" class="link" v-if="pAdmin" >Create Post</NuxtLink>
      <NuxtLink style="--i:2;" to="/about" class="link" >About Us</NuxtLink>            
      <NuxtLink style="--i:2;" to="donation" class="link" >후원하기</NuxtLink>        
      <NuxtLink style="--i:3;" to="/auth/login" class="link" v-if="!user" >Login/Register</NuxtLink>          
    </nav>    
    <!-- Profile Menu -->
    <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
      <span class="nanum-font">{{ pInitials }}</span>
      <div v-show="profileMenu" class="profile-menu">
        <div class="info">
          <p class="initials">{{ pInitials }}</p>
          <div class="right">                  
            <p>{{ pdisplayName }}</p>
            <p>{{ pEmail }}</p>
          </div>
        </div>
        <div class="options">
          <div class="option">
            <NuxtLink to="/views/profile" class="option">
              <UIcon name="i-heroicons-user-16-solid" class="w-6 h-6 text-amber-400" />
              <p>회원정보수정</p>
            </NuxtLink>
          </div>
            <div class="option">
              <NuxtLink to="/views/admin" v-if="pAdmin" class="option">
                <UIcon name="i-mdi-crown" class="w-6 h-6 text-amber-500" />
                <p>관리자계정</p>
              </NuxtLink >
            </div>  
            <div @click="usersStore.logout" class="option">
              <UIcon name="i-heroicons-arrow-right-start-on-rectangle-16-solid" class="w-6 h-6 text-amber-600" />
              <p>로그 아웃</p>
            </div>
          </div>
       </div>
    </div> 
    <!-- profile end --> 
    <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>            
  </header>

</template>

<script setup>
import { useUsersStore } from '~/stores/useUsers'
const profileMenu = ref(false)
const usersStore = useFirebaseAuthStore()
const useStore = useUsersStore()
const { pEmail, pAdmin, pdisplayName, pInitials } = storeToRefs(useStore)
const profile = ref(null)
const user = computed(() => useStore.userId) 
const admin = computed(() => useStore.pAdmin)
const toggleProfileMenu = (event) => {  
  if (event.target === profile.value)
 profileMenu.value = !profileMenu.value
}
// console.log('www', admin.value)


</script>

<style scoped>
/* body{ padding-top: 78px; } */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  z-index: 100;     

}
/* Appbar color */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;    
  background: linear-gradient(to left, rgb(0, 9, 60), rgb(45, 11, 0));
  filter: blur(20px);
  backdrop-filter: blur(50px);
  z-index: -1;
 
}
.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: 0.5s;
 
}
.header:hover::after {
  left:100%;
}
.logo {  
  color: #fff;  
  margin: 0 5px 0 0 ;
  text-decoration: none;    
}
.navbar .link {
  font-size: 1.15rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-right: 2rem;
}
.navbar .link:hover {
  color: black;
  background: rgb(201, 199, 199);
  border-radius: 5px;
  transition: 0.5s ease-in-out;
}
#check {
  display: none;
}
.icons {
  position: absolute;
  right: 5%;
  font-size: 2.8rem;
  color: #fff;
  cursor: pointer;
  display: none;
}
.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 992px) {
  .header {
   padding: 1.3rem 5%; 
  }
  .profile {
    margin-right: 25px;
  }
}
@media screen and (max-width: 768px) {
  .icons {
    display: inline-flex;
    margin-right: 30px;
  }  
  .profile {
    margin-right: 65px;
  }  
  #check:checked~.icons #menu-icon {
    display: none;
  }
  .icons #close-icon {
    display: none;
  }
  #check:checked~.icons #close-icon {
    display: block;
  } 
  .logo-text span {
    font-size: 1.2rem;
  }
  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;        
    height: 0;
    /* background: red; */
    background: rgba(0, 0, 0, 0.3);    
    backdrop-filter: blur(50px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: 0.3s ease;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: 0.3s ease;
  }
  #check:checked~.navbar {
    height: 16rem;
  }
  
  .navbar .link {
    display: block;
    font-size: 1.1rem;   
    margin: 1.5rem 0;
    text-align: center;
    transform: translateY(-10px);
    transition: 0.3s ease;
    opacity: 0;
  }
  #check:checked~.navbar .link {
    transform: translateY(0);  
    opacity: 1;
    transition-delay: calc(0.15s * var(--i));  
    }
  .logout {
    position: relative;
    top: 0;
    right: 20%;
  } 
}
/* Profine */
.profile {
  position: relative;
  align-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #343232;
  font-weight: bolder;
  /* background: linear-gradient(to right, #06e56e, #083de9); */
  background-color: #eae699;
  box-shadow: 0 4px 6px 1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.006);
}
.profile span {
  pointer-events: none;
}               

.profile-menu {
    position: absolute;
    top: 60px;
    right: 0;
    width: 250px;
    background-color: #303030;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.006);
    transition: transform 0.3s ease-in-out;
}
.profile-menu .info
{
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #fff;
}
                    

.initials {
  position: initial;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-weight: bolder;
  color: #303030;
  background-color: rgba(246, 235, 217, 0.8); 
}

.right {
  flex: 1;
  margin-left: 24px;
  color: white;
}
.right p:nth-child(1) {
  font-size: 14px;
  }
  
.right P:nth-child(2),
.right p:nth-child(3) {
  font-size: 12px;
  }
.options {
padding: 15px;
}
.options .option {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;  
}
.options .option .icon {
      width: 18px;
      height: auto;
  }
  p {
      font-size: 14px;
      margin-left: 12px;
  }
  .options:last-child {
    margin-bottom: o;
  }
  p:nth-last-child {
    margin-bottom: 0px;
  }
 
</style>