<template>
  <div class="poppins-font top">           
    <div class="container1" :class="{active: isActive}">
      <div class="form-box login">
        <UForm class="form1" action="" @submit.prevent="handleLoginSubmit">
          <h1 class="jua-font">로그인</h1>         
          <div class="input-box">
            <input type="email" placeholder="Emain" v-model="email" required>
            <UIcon class="input-box-icon" name="i-heroicons-envelope-20-solid"></UIcon>
          </div>
          <div class="input-box">
            <input type="password" placeholder="password" v-model="password" required>
            <UIcon class="input-box-icon" name="heroicons-lock-closed-solid"></Uicon>
          </div>          
          <div class="forgot-link">            
            <NuxtLink class="forgot-link-to" to="/auth/forgotPassword">비밀번호를 잃어버렸습니까?</NuxtLink>            
          </div>
          <UButton type="submit" size="x-large" color="#7494ec" rounded="lg" class="btn login-btn -mt-2"><span class="mx-auto">로그인</span></UButton>
          <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
          <p class="text-p">울산독수리와 함께~~</p>
          <div class="social-icons">
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-google"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-facebook"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-github"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-linkedin"></UIcon></NuxtLink>            
          </div>
        </UForm>
      </div>    
      <div class="form-box register" >
        <UForm class="form1" action="" @submit.prevent="handleRegSubmit">
          <h1 class="jua-font">회원가입</h1>
          <div class="input-box">
            <input type="text" placeholder="userName" v-model="displayName" />
            <UIcon class="input-box-icon" name="i-mdi-account-circle"></UIcon>
            <p v-if="regErrors.displayName" class="error-msg">{{ regErrors.displayName }}</p>
          </div>
          <div class="input-box">
            <input type="email" placeholder="E-mail" v-model="regEmail" />
            <UIcon class="input-box-icon" name="i-mdi-email"></UIcon>
            <p v-if="regErrors.email" class="error-msg">{{ regErrors.email }}</p>
          </div>
          <div class="input-box">
            <input type="password" placeholder="password" v-model="regPassword" />
            <UIcon class="input-box-icon" name="i-mdi-lock"></UIcon>
            <p v-if="regErrors.password" class="error-msg">{{ regErrors.password }}</p>
          </div>
          <div class="input-box">
            <input type="password" placeholder="비밀번호 확인" v-model="repassword" />
            <UIcon class="input-box-icon" name="i-ic-sharp-lock-person"></UIcon>
            <p v-if="regErrors.repassword" class="error-msg">{{ regErrors.repassword }}</p>
          </div>
          <UButton type="submit" color="#7494ec" rounded="lg" class="btn login-btn"><span class="mx-auto">회원가입</span></UButton>
          <p v-if="regErrors.server" class="error-msg">{{ regErrors.server }}</p>
        </UForm>
      </div>    
      <div class="toggle-box">
        <div class="toggle-panel toggle-left">
          <h1>Hello, Welcome</h1>
          <p class="mt-4">아직 계정이 없으십니까?</p>
          <UButton variant="solid" class="btn register-btn" @click="isActive = true"><span class="mx-auto">회원가입</span></UButton>
        </div>
        <div class="toggle-panel toggle-right">
          <h1 class="mb-8">Welcome Back!</h1>
          <p class="mt-6">이미 계정이 있습니까?</p>
          <UButton class="btn login-btn bg-transparent" @click="isActive = false"><Span class="mx-auto">로그인</Span></UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'layout-login'
})
const toast = useToast() 
const authStore = useFirebaseAuthStore()
const useStore = storeToRefs(useUsersStore())
const displayName = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')
const errorMsg = ref('')
// 회원가입 전용 필드 (로그인 필드와 분리)
const regEmail = ref('')
const regPassword = ref('')
const regErrors = ref({ displayName: '', email: '', password: '', repassword: '', server: '' })
// const { $auth } = useNuxtApp()
const isActive = ref(false)

const handleRegSubmit = async () => {
  regErrors.value = { displayName: '', email: '', password: '', repassword: '', server: '' }
  let hasError = false

  if (!displayName.value) {
    regErrors.value.displayName = '닉네임을 입력해 주세요.'
    hasError = true
  }
  if (!regEmail.value) {
    regErrors.value.email = '이메일을 입력해 주세요.'
    hasError = true
  }
  if (!regPassword.value) {
    regErrors.value.password = '비밀번호를 입력해 주세요.'
    hasError = true
  } else if (regPassword.value.length < 6) {
    regErrors.value.password = '비밀번호는 6자 이상이어야 합니다.'
    hasError = true
  }
  if (!repassword.value) {
    regErrors.value.repassword = '비밀번호 확인을 입력해 주세요.'
    hasError = true
  } else if (regPassword.value !== repassword.value) {
    regErrors.value.repassword = '비밀번호가 일치하지 않습니다.'
    hasError = true
  }
  if (hasError) return

  try {
    await authStore.register(regEmail.value, regPassword.value, displayName.value)
    toast.add({
      title: "성공적으로 회원가입 되었습니다.",
      timeout: 2000,
      callback: async () => {
        await navigateTo('/')
      }
    })
  } catch (error) {
    console.log(error)
    const code = error.code
    if (code === 'auth/email-already-in-use') {
      regErrors.value.email = '이미 사용 중인 이메일입니다.'
    } else if (code === 'auth/invalid-email') {
      regErrors.value.email = '유효하지 않은 이메일 형식입니다.'
    } else if (code === 'auth/weak-password') {
      regErrors.value.password = '비밀번호가 너무 약합니다. 6자 이상으로 설정해 주세요.'
    } else if (code === 'auth/network-request-failed') {
      regErrors.value.server = '네트워크 연결을 확인해 주세요.'
    } else {
      regErrors.value.server = '회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.'
    }
  }
}
const handleLoginSubmit = async () => {
  errorMsg.value = ''
  if (!email.value) {
    errorMsg.value = '이메일을 입력해 주세요.'
    return
  }
  if (!password.value) {
    errorMsg.value = '비밀번호를 입력해 주세요.'
    return
  }
  try {
    await authStore.login(email.value, password.value)
    toast.add({
      title: "로그인 중입니다...",
      timeout: 2500,
      callback: async () => {
        await navigateTo('/')
      }
    })
  } catch (error) {
    console.log(error)
    const code = error.code
    if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
      errorMsg.value = '이메일 또는 비밀번호가 올바르지 않습니다.'
    } else if (code === 'auth/too-many-requests') {
      errorMsg.value = '로그인 시도가 너무 많습니다. 잠시 후 다시 시도해 주세요.'
    } else if (code === 'auth/network-request-failed') {
      errorMsg.value = '네트워크 연결을 확인해 주세요.'
    } else {
      errorMsg.value = '로그인 중 오류가 발생했습니다. 다시 시도해 주세요.'
    }
  }
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(90deg, #e2e2e2, #c9d6ff)
}
.container1 {
  position: relative;
  width: 850px;
  height: 650px;
  background: #fff;
  border-radius: 30px;
  box-shadow: rgba(0,0,0,0.2);
  overflow: hidden;
  margin: 20px;
}
.form-box {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #fff;  
  display: flex;
  align-items: center;
  color: #333;
  padding: 40px;
  text-align: center;
  justify-content: center;
  z-index: 1;
  transition: 0.6s ease-in-out 1.2s, visibility 0s 1s;
}

.container1.active .form-box {
  right: 50%;
}
.form-box.register {
  visibility: hidden;
}
.container1.active .form-box.register {
  visibility: visible;
}
.form1 {
  width: 100%;
  margin-top: -30px;
}
.container1 h1 {
  font-size: 36px;
  margin: -10px 0;
}
.input-box {
  position: relative;
  margin: 30px;  
}
.input-box input {
  padding: 13px 50px 13px 20px;
  background: white;
  width: 100%;  
  background: #eee;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
}
.input-box input::placeholder {
  color: #888;
  font-weight: 400;
}
.input-box .input-box-icon{
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 20px;  
}
.forgot-link {
  margin: -15px 0 15px 0
}
.forgot-link .forgot-link-to {
  font-size: 14.5px;
  color: #333;
  text-decoration: none;    
}
.forgot-link .forgot-link-to:hover {
  font-weight: bold;
  color: #7494ec;  
  text-decoration-line: underline;
  transition: 0.8s ease-in-out;
  }
.btn {
  width: 100%;
  height: 48px;
  background: #7494ec;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0,0.1);
  border: none;
  font-size: 16px;
  color: #fff;
}
.container1 .text-p {
  font-size: 14.5px;
  margin: 15px 0;
}
.social-icons .link1 {
  display: inline-flex;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 24px;
  color: #333;
  text-decoration: none;
  margin: 0 8px;
}
.login-btn {
  width: 300px;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.toggle-box {
  position: absolute;
  width: 100%;
  height: 100%;  
}
.toggle-box::before {
  content: "";
  position: absolute;
  left: -250%;
  width: 300%;
  height: 100%;
  background: #7494ec;  
  border-radius: 150px;
  z-index: 2;
  transition: 1.5s ease-in-out;;
}
.container1.active .toggle-box::before {
  left: 50%;
}
.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;  
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.6s ease-in-out;
}
.toggle-panel.toggle-left {
  left: 0;
  transition-delay: 1.2s;
}
.container1.active .toggle-panel.toggle-left {
  left: -50%;
  transition-delay: 0.6s;
}
.toggle-panel.toggle-right {
  right: -50%;
  transition-delay: 0.6s;
}
.container1.active .toggle-panel.toggle-right {
  right: 0;
  transition-delay: 1.2s;
}
.error-msg {
  color: #e53e3e;
  font-size: 13px;
  margin: 6px 0 0;
}
.toggle-panel p {
  margin-bottom: 20px;
}
.toggle-panel .btn {
  width: 160px;
  height: 46px;
  background: transparent;
  border: 2px solid #fff;
  box-shadow: none;
}
@media screen and (max-width: 650px) {
  .form1 {
    max-height: 750px;
    height: 100%;
  }
  .form1 h1 {
   float: left;
   margin-left: 47px;
   font-size: x-large;
 
  } 
  .container1 {
    height: calc(100vh-20px);   
  }
  .form-box {    
    width: 100%;
    height: 70%;
    top: 25%;
  }
  .container1.active .form-box {
    right: 0;
    top: 22%;
    /* bottom: 32%; */
  }
  .toggle-box::before {
    left: 0;
    top: -270%;
    width: 100%;
    height: 300%;
    border-radius: 20vw;
  }
  .container1.active .toggle-box::before {
    left: 0;
    top: 70%;
  }
  .toggle-panel {    
    width: 100%;
    height: 30%;
  }
  .toggle-panel.toggle-left {
    top: 0;
  }
  .container1.active .toggle-panel.toggle-left {
    left: 0;
    bottom: -30%;
  }
  .toggle-panel.toggle-right {
    right: 0;
    bottom: -30%;
  }
  .container1.active .toggle-panel.toggle-right {
    bottom: 0;
  }
  .resister-btn {
    top: -7%;
  }   
  .input-box input {
    margin-top: 5px;
   
  }
}
@media  screen and (max-width: 400px) {
  .form-box {
    padding: 20px;
  }
  .toggle-panel h1 {
    font-size: 0;
  }
  .social-icons .link1 {
    display: inline-flex;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 20px;
    color: #333;
    text-decoration: none;
    margin: 15px 8px;
}

}
</style>