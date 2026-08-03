<template>
  <div class="body">
    <header class="header">
      <nav class="nav container">
        <div class="nav_data">
          <div class="nav_title">
            <NuxtLink to="/" class="nav_text">
              <NuxtImg class="nav_logo" src="/logo.png" width="30px" format="Webp"></NuxtImg>
              <span class="lobster-regular text-3xl ml-2 text-gray-700 with-text">With</span>
              <span class="bagel-fat-one-regular text-3xl ml-2 text-gray-100 ulsan-text">울산독수리</span>
            </NuxtLink>
          </div>
          <div class="nav_toggle" id="nav-toggle">
            <UIcon name="i-heroicons-bars-3-16-solid" class="nav_burger w-8 h-8" id= "menu-icon"/>
            <UIcon name="i-heroicons-x-mark-16-solid" class="nav_close w-8 h-8 mr-5" id= "close-icon" />
          </div>
        </div>
        <!-- NAV MENU -->
         <div class="nav_menu" id="nav-menu">
          <ul class="nav_list">
            <li><NuxtLink to="/" class="nav_link">Home</NuxtLink></li>
            <li><NuxtLink to="/views/blogs" class="nav_link">Blogs</NuxtLink></li>
            <li><NuxtLink to="/createPost" class="nav_link" v-if="pAdmin" >Create Post</NuxtLink></li>
            <li class="dropdown_item">
              <div class="nav_link">
                About Us<UIcon name="i-heroicons-chevron-down-16-solid" class="dropdown_arrow w-7 h-7 text-amber-600"/>
              </div>
              <ul class="dropdown_menu">
                <li><NuxtLink to="/about" class="dropdown_link"><UIcon name="i-heroicons-users-solid" class="w-6 h-6" />단체소개</NuxtLink></li>
                <li><NuxtLink to="/newsNotice" class="dropdown_link"><UIcon name="i-heroicons-newspaper" class="w-6 h-6" />독수리뉴스</NuxtLink></li>
                <li><NuxtLink to="/donation" class="dropdown_link"><UIcon name="heroicons-gift" class="w-6 h-6" />후원하기</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/auth/login" class="nav_link" v-if="!pEmail" >Login/Register</NuxtLink></li>
          </ul>   
         </div>
      </nav>
      <!-- Profile Menu -->
      <div class="profile-header">       
        <div v-if="pEmail" @click="toggleProfileMenu" class="profile" ref="profile">
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
                    <p>회원 수:{{ cardStore.userCount }}명</p>
                  </NuxtLink >
                </div>  
                <div @click="usersStore.logout" class="option">
                  <UIcon name="i-heroicons-arrow-right-start-on-rectangle-16-solid" class="w-6 h-6 text-amber-600" />
                  <p>로그 아웃</p>
                </div>
              </div>
          </div>
        </div> 
      </div>
    <!-- profile end --> 
     <div class="color-mode">
       <ClientOnly>
         <ColorModeSelector />
        </ClientOnly>     
      </div>
    </header>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'none-layout'
})
  import { useUsersStore } from '~/stores/useUsers'  
  
 
  const profileMenu = ref(false)
  const usersStore = useFirebaseAuthStore()
  const cardStore = useGetCardStore()
  const useStore = useUsersStore()
  const { pEmail, pAdmin, pdisplayName, pInitials } = storeToRefs(useStore)
  const profile = ref(null)
  const user = computed(() => useStore.user) 
  const admin = computed(() => useStore.pAdmin)
  const unShow = ref(false)
  const toggleProfileMenu = (event) => {  
    if (event.target === profile.value)
  profileMenu.value = !profileMenu.value
  }
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')     
    })
  }
  onMounted (() => {    
    showMenu('nav-toggle', 'nav-menu')
    cardStore.fetchUserCount()    
  })
</script>

<style scoped>
/*=================== Header =============== */
.container {
  max-width: 1120px;
  margin-inline: 1.5rem;
}
.header {
  position: fixed;  
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: var(--black-color); */
  background-color: var(--teal);
  box-shadow: 0 2px 16px hsla(220, 32%, 8%, 0.3);
  z-index: var(--z-fixed);
  margin-bottom: 1rem;
}
/*====================== Nav ====================== */
.nav {
  height: var(--header-height);  
}
.nav_data {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
.nav_text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}
.nav_burger, .nav_close {
  color: #fff;
}
.nav_toggle {
  position: relative;
  width: 32px;
  height: 32px;   
  top: 0;
  right: 6%; 
}
.nav_burger, .nav_close {
  position: absolute;
  display: grid;
  cursor: pointer;  
  inset: 0;
  place-items: center;
  transition: opacity 0.1s, transform 0.4s;
}
.nav_close {
  opacity: 0;
}

/*=========== Navigation for mobile devides ========= */
@media screen and (max-width: 1118px) {
  .nav_menu {
    position: absolute;
    left: 0;
    top: 3.5rem;    
    width: 100%;
    /* background: gray; */
    height: calc(100vh - 3.5rem);
    overflow: auto;
    pointer-events: none;
    opacity: 0;
    transition: top 04s, opacity 0.3s;
  }
  .nav_menu::-webkit-scrollbar {
    width: 0;
  }
  .nav_list {
    background-color: var(--black-color);
    padding-top: 1rem;
  }
  .nav_toggle {
    margin-right: 1.5rem;
} 

}
/*=========== Navigation for mobile devides End========= */
  .nav_link {
    color: #fff;    
    /* background-color: var(--black-color); */
    background-color: transparent;
    backdrop-filter: blur(50px);
    font-weight: var(--font-semi-bold);
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s;
  }
  .nav_link:hover {
    background-color: var(--black-color-light);
  }
  
  /* ================ Show Menu ====================*/
  .show-menu {
    opacity: 1;
    top: 3.5rem;
    pointer-events: initial;  
  }
  /* ================ Show Icon ====================*/
  .show-icon .nav_burger {
    opacity: 0;
    transform: rotate(90deg)
  }
  .show-icon .nav_close {
    opacity: 1;
    transform: rotate(90deg)
  }
  /* =============== Dropdwon ================ */
  .dropdown_item {
    cursor: pointer;
  }
  .dropdown_arrow {    
    transition: transform 0.4s;
  }
  
  .dropdown_link {
    padding: 1.25rem 1.25rem 1.25rem 2.5rem;
    color: #fff;
    background-color: var(--black-color-light);
    display: flex;
    align-items: center;
    font-weight: var(--font-semi-bold);
    column-gap: 0.5rem;
    transition: background-color 0.3s;
  }
  .dropdown_link:hover {
    background-color: var(--black-color);
  }
  .dropdown_menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
  }
  /* ================ Show dropmenu ========== */
  .dropdown_item:hover .dropdown_menu {
    max-height: 1000px;
    transition: max-height 1s ease-in;
  }
  /* ================ Rotate dropmenu Icon========== */
  .dropdown_item:hover .dropdown_arrow {
    transform: rotate(180deg);
    color: aqua;
  }
 
  /* ============ BreakerPoint ===============*/
  @media screen and (max-width: 340px) { 
    .container {
      margin-inline: 0;
    }
    .with-text {
      font-size: 1.2rem;
    }
    .ulsan-text {
      font-size: 1.5rem;
    }
    .nav_logo {
      width: 25px;
    }
    .nav_link {
      padding-inline: 1rem;
    }
    
  }

  /* =============== Large devices ====================*/
  @media screen and (min-width: 1119px) {
    .container {
      margin-inline: auto;
    }
  
    .nav {
      height: calc(var(--header-height) + 2rem );
      display: flex;
      justify-content: space-between;
    }
    .nav_toggle {
      display: none;
    }
    .nav_menu {
      margin-right: 10rem;
    }
    .nav_list {
      height: 100%;
      display: flex;
      column-gap: 1rem;      
    }
    .nav_link {
      height: 100%;
      padding: 0;
      justify-content: initial;
      column-gap: 0.25rem;
    }
    .nav_link:hover {
      background-color: transparent;  
      color: aqua;
  }
  .dropdown_item {
    position: relative;
  }
  .dropdown_menu {
    max-height: initial;
    overflow: initial;
    position: absolute;
    left: 0;
    top: 6rem;
    width: 160%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, top 0.3s;
  }
  .dropdown_link {
    padding: 1rem 1.5rem;
  }
  .profile-menu {
    margin-top: 1.7rem;
  }
  .profile {
    margin-top: 0rem;
  }
  /* ==============Show Dropdown menu============= */
  .dropdown_item:hover .dropdown_menu {
    opacity: 1;
    top: 5.5rem;
    pointer-events: initial;
    transition: top 0.3s;
  }
}
/* other style */


/* Appbar color */
/* .header::before {
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
} */

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

.icons {
  position: absolute;
  right: 5%;
  font-size: 2.8rem;
  color: #fff;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 992px) {
  /* .header {
   padding: 1.3rem 5%; 
  } */
  .profile {
    margin-right: 25px;
  }
}
@media screen and (max-width: 400px) {
  .with-text {
    font-size: 0.8rem;
  }
  .ulsan-text {
    font-size: 1.3rem;
    margin-left: -0.5rem;
  }
  .nav_logo {
    width: 21px;
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
  .navbar .link {
    display: block;
    font-size: 1.1rem;   
    margin: 1.5rem 0;
    text-align: center;
    transform: translateY(-10px);
    transition: 0.3s ease;
    opacity: 0;
  } 
  .logout {
    position: relative;
    top: 0;
    right: 20%;
  } 
}
.profile {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
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
    top: 48px;
    right: 0;
    width: 250px;
    background-color: var(--black-color);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.006);
    transition: transform 0.3s ease-in-out;
}
.option:hover {
  background-color: var(--black-color-light); 
}
.option:hover p {
  color: aqua; 
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