<template>
  <div class="poppins-font top">           
    <div class="container1" :class="{active: isActive}">
      <!-- 로그인 폼 (Nuxt UI UForm + UInput + Zod schema) -->
      <div class="form-box login">
        <UForm :schema="loginSchema" :state="loginState" class="form1 space-y-4" @submit="handleLoginSubmit">
          <h1 class="jua-font mb-4">로그인</h1>         
          
          <UFormGroup name="email" class="text-left">
            <UInput 
              v-model="loginState.email" 
              type="email" 
              placeholder="E-mail" 
              icon="i-heroicons-envelope-20-solid" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup name="password" class="text-left">
            <UInput 
              v-model="loginState.password" 
              type="password" 
              placeholder="비밀번호 (8자 이상)" 
              icon="i-heroicons-lock-closed-20-solid" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>          

          <div class="forgot-link">            
            <NuxtLink class="forgot-link-to" to="/auth/forgotPassword">비밀번호를 잃어버렸습니까?</NuxtLink>            
          </div>

          <UButton type="submit" size="xl" block color="indigo" rounded="lg" class="btn login-btn">
            <span class="mx-auto font-bold">로그인</span>
          </UButton>

          <p v-if="loginErrorMsg" class="error-msg server-error">{{ loginErrorMsg }}</p>
          <p class="text-p">울산독수리와 함께~~</p>

          <div class="social-icons">
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-google"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-facebook"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-github"></UIcon></NuxtLink>
            <NuxtLink class="link1" to="#" target="_blank"><UIcon class="input-box-icon" name="i-mdi-linkedin"></UIcon></NuxtLink>            
          </div>
        </UForm>
      </div>    

      <!-- 회원가입 폼 (Nuxt UI UForm + UInput + Zod schema) -->
      <div class="form-box register">
        <UForm :schema="registerSchema" :state="regState" class="form1 space-y-3" @submit="handleRegSubmit">
          <h1 class="jua-font mb-4">회원가입</h1>

          <UFormGroup name="displayName" class="text-left">
            <UInput 
              v-model="regState.displayName" 
              type="text" 
              placeholder="이름 (2자 이상)" 
              icon="i-mdi-account-circle" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup name="email" class="text-left">
            <UInput 
              v-model="regState.email" 
              type="email" 
              placeholder="E-mail" 
              icon="i-mdi-email" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup name="password" class="text-left">
            <UInput 
              v-model="regState.password" 
              type="password" 
              placeholder="비밀번호 (8자 이상)" 
              icon="i-mdi-lock" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup name="repassword" class="text-left">
            <UInput 
              v-model="regState.repassword" 
              type="password" 
              placeholder="비밀번호 확인" 
              icon="i-ic-sharp-lock-person" 
              size="xl"
              class="w-full"
            />
          </UFormGroup>

          <UButton type="submit" size="xl" block color="indigo" rounded="lg" class="btn login-btn mt-2">
            <span class="mx-auto font-bold">회원가입</span>
          </UButton>

          <p v-if="regErrorMsg" class="error-msg server-error">{{ regErrorMsg }}</p>
        </UForm>
      </div>    

      <!-- 토글 패널 -->
      <div class="toggle-box">
        <div class="toggle-panel toggle-left">
          <h1>Hello, Welcome</h1>
          <p class="mt-4">아직 계정이 없으십니까?</p>
          <UButton variant="solid" class="btn register-btn" @click="isActive = true"><span class="mx-auto">회원가입</span></UButton>
        </div>
        <div class="toggle-panel toggle-right">
          <h1 class="mb-8">Welcome Back!</h1>
          <p class="mt-6">이미 계정이 있습니까?</p>
          <UButton class="btn login-btn bg-transparent" @click="isActive = false"><span class="mx-auto">로그인</span></UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { z } from 'zod'

definePageMeta({
  layout: 'layout-login'
})

const toast = useToast() 
const authStore = useFirebaseAuthStore()
const isActive = ref(false)

// 로그인 상태
const loginState = reactive({
  email: '',
  password: ''
})
const loginErrorMsg = ref('')

// 회원가입 상태
const regState = reactive({
  displayName: '',
  email: '',
  password: '',
  repassword: ''
})
const regErrorMsg = ref('')

// 1. 로그인 Zod 스키마
const loginSchema = z.object({
  email: z.string().min(1, '이메일을 입력해 주세요.').email('올바른 이메일 형식이 아닙니다.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.').min(8, '비밀번호는 8자리 이상이어야 합니다.')
})

// 2. 회원가입 Zod 스키마 (이름 2자리 이상, 비밀번호 8자리 이상)
const registerSchema = z.object({
  displayName: z.string().min(1, '이름을 입력해 주세요.').min(2, '이름은 2자리 이상이어야 합니다.'),
  email: z.string().min(1, '이메일을 입력해 주세요.').email('올바른 이메일 형식이 아닙니다.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.').min(8, '비밀번호는 8자리 이상이어야 합니다.'),
  repassword: z.string().min(1, '비밀번호 확인을 입력해 주세요.')
}).refine((data) => data.password === data.repassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['repassword']
})

// Firebase Auth 오류 코드를 한글 메시지로 변환해 주는 헬퍼 함수
const getFirebaseErrorMessage = (code, defaultMsg = '오류가 발생했습니다.') => {
  switch (code) {
    case 'auth/email-already-in-use':
      return '이미 사용 중인 이메일 주소입니다.'
    case 'auth/invalid-email':
      return '올바른 이메일 형식이 아닙니다.'
    case 'auth/weak-password':
      return '비밀번호가 너무 약합니다. 최소 8자 이상 입력해 주세요.'
    case 'auth/user-not-found':
      return '등록되지 않은 이메일 계정입니다.'
    case 'auth/wrong-password':
      return '비밀번호가 올바르지 않습니다.'
    case 'auth/invalid-credential':
      return '이메일 또는 비밀번호가 올바르지 않습니다.'
    case 'auth/user-disabled':
      return '비활성화된 계정입니다. 관리자에게 문의해 주세요.'
    case 'auth/too-many-requests':
      return '로그인 시도가 너무 많아 계정이 일시 잠겼습니다. 잠시 후 다시 시도해 주세요.'
    case 'auth/network-request-failed':
      return '네트워크 연결이 원활하지 않습니다. 인터넷 상태를 확인해 주세요.'
    case 'auth/popup-closed-by-user':
      return '로그인 창이 닫혔습니다.'
    default:
      return defaultMsg
  }
}

const handleLoginSubmit = async (event) => {
  loginErrorMsg.value = ''
  try {
    await authStore.login(event.data.email, event.data.password)
    toast.add({
      title: "성공적으로 로그인되었습니다.",
      timeout: 1500,
      callback: async () => {
        await navigateTo('/')
      }
    })
  } catch (error) {
    console.error('Firebase Auth Login Error:', error)
    const code = error.code || ''
    loginErrorMsg.value = getFirebaseErrorMessage(code, '로그인 중 오류가 발생했습니다. 이메일과 비밀번호를 확인해 주세요.')
  }
}

const handleRegSubmit = async (event) => {
  regErrorMsg.value = ''
  try {
    await authStore.register(event.data.email, event.data.password, event.data.displayName)
    toast.add({
      title: "성공적으로 회원가입 되었습니다.",
      timeout: 2000,
      callback: async () => {
        await navigateTo('/')
      }
    })
  } catch (error) {
    console.error('Firebase Auth Register Error:', error)
    const code = error.code || ''
    regErrorMsg.value = getFirebaseErrorMessage(code, '회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.')
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
  margin-top: -20px;
}
.container1 h1 {
  font-size: 36px;
}
.forgot-link {
  margin: 5px 0 15px 0;
  text-align: center;
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
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0,0.1);
  border: none;
  font-size: 16px;
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
  width: 100%;
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
  transition: 1.5s ease-in-out;
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
}
.server-error {
  text-align: center;
  margin-top: 10px;
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
    height: calc(100vh - 20px);   
  }
  .form-box {    
    width: 100%;
    height: 70%;
    top: 25%;
  }
  .container1.active .form-box {
    right: 0;
    top: 22%;
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
}
@media screen and (max-width: 400px) {
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