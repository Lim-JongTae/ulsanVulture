<template>
  <div class="body1">
    <footer>
      <div class="row">
        <div class="col">
          <NuxtImg class="logo" src="/logo.png" format="Webp" /> 
          <span class="lobster-regular text-3xl ml-2">With</span>
          <span class="bagel-fat-one-regular text-3xl ml-2">울산독수리</span>
          <p>녹색에너지는 독수리보호와 기후변화에 적극 대응합니다</p>
        </div>
        <div class="col">
          <h3>Office <div class="underline"><span></span></div></h3>
          <p>울산광역시 <br />남구 삼산로67번길<br/>27-1</p>
          <p>녹색에너지포럼</p>
          
          <h4>052-227-4111</h4>
        </div>
        <div class="col">
          <h3>Links <div class="underline"><span></span></div></h3>
          <ul>
            <li><NuxtLink class="link" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="link" to="/views/blogs">Blogs</NuxtLink></li>
            <li><NuxtLink class="link" to="/createPost" v-if="pAdmin">Create Post</NuxtLink></li>
            <li><NuxtLink style="--i:2;" to="/donation" class="link" >후원하기</NuxtLink></li>
            <li><NuxtLink class="link" to="/auth/login" v-if="!pEmail">Login/Register</NuxtLink></li>
          </ul>
        </div>
        <div class="col">
          <h3>NewsLetter <div class="underline"><span></span></div></h3>
          <div class="form1">
            <MdiIcon icon="mdiMail" size="1.2rem" class="mr-3" />
            <!-- <span class="mr-3">noksek@hanmail.net</span> -->
            <a href="mailto:noksek@hanmail.com" class="mr-3 decoration-sky-500 hover:text-sky-500">noksek@hanmail.net</a>
            <MdiIcon icon="mdiArrowRight" size="1.2rem" />
          </div>          
          <div class="social-icons">
            <a><NuxtLink href="#"><MdiIcon icon="mdiYoutube" class="icon" /></NuxtLink></a>
            <a><NuxtLink href="#"><MdiIcon icon="mdiTwitter" class="icon" /></NuxtLink></a>
            <a><NuxtLink href="#"><MdiIcon icon="mdiInstagram" class="icon" /></NuxtLink></a>
            <a><NuxtLink href="#"><MdiIcon icon="mdiLinkedin" class="icon" /></NuxtLink></a>
          </div>
        </div>
      </div>
      <hr>
      <p class="copyright">
    <strong>&copy; {{ new Date().getFullYear() }} All Rights Reserved noksek</strong>
    &nbsp;|&nbsp;
    <NuxtLink to="/privacy" class="privacy-link">개인정보처리방침</NuxtLink>
  </p>
    </footer>
  </div>
</template>

<script setup>
// const isYear = ref(null)
const useStore = useUsersStore()
const { pEmail, pAdmin } =storeToRefs(useStore)
</script>

<style scoped>
.body1 {
  background-color: #eef8ff;  
  
}
footer {
  width: 100%;  
  position: absolute;  
  /* bottom: 0; */
  left: 0;
  background: linear-gradient(to right, #00093c, #2d0b00);
  color: #fff;
  padding: 100px 0 30px;
  border-top-left-radius: 125px;
  font-size: 13px;
  line-height: 20px;
}
.row {
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.col {
  flex-basis: 25%;
  padding: 10px;
}
.col:nth-child(2), .col:nth-child(3) {
  flex-basis: 15%;  
}
.col .logo {
  width: 80px;
  margin-bottom: 30px;
}
.col h3 {
  width: fit-content;
  margin-bottom: 40px;
  position: relative;
  font-weight: bolder;
}
.email-id {
  width: fit-content;
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
}
ul li {
  margin-bottom: 12px;
}
ul li .link {
  text-decoration: none;
  color: white;
}

.form1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 50px;
}
/* .form1 span {
  width: 100%;
  background: transparent;
  color: #ccc;
  border: 0;
  outline: none;
} */
 .social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
 
 }
 .social-icons .icon {
  width: 35px;
  height: 35px;  
  border-radius: 50%; 
  line-height: 40px;
  color: #000;
  background: #fff;
  margin-right: 15px;
  cursor: pointer;
 }
 hr {
  width: 90%;
  border: 0;
  border-bottom: 1px solid #ccc;
  margin: 20px auto;
 }
 .copyright {
  text-align: center;
 }
 .privacy-link {
  color: #ccc;
  text-decoration: underline;
 }
 .privacy-link:hover {
  color: #fff;
 }
 .underline {
  width: 100%;
  height: 5px;
  background: #767676;
  border-radius: 3px;
  position: absolute;
  top: 25px;
  left: 0;
  overflow: hidden;
 }
 .underline span {
  width: 15px;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 10px;
  animation: moving 2s linear infinite;
 }
 
 @keyframes moving {
  0%{
    left: -20px;
  }
  100%{
    left: 100%
  }
 }
 @media screen and (max-width: 700px) {
  footer {
    bottom: unset;
  }

 .col {
  flex-basis: 100%;
  
}
.col:nth-child(2), .col:nth-child(3) {
  flex-basis: 100%;  
}
}
</style>