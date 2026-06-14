import { defineStore } from 'pinia'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,    
  sendPasswordResetEmail,
  onAuthStateChanged
} 
  from "firebase/auth";

export const useFirebaseAuthStore = defineStore('useFirebaseAuthStore',{
  state: () => ({
    users: null,
   }),
   actions: {
    async register (email, password, displayName) {
      const { $auth } = useNuxtApp()
      const userCredential = await createUserWithEmailAndPassword($auth, email, password)
      this.users = userCredential.user
      await updateProfile($auth.currentUser, { displayName: displayName })
    },
    async login (email, password) {
      const { $auth } = useNuxtApp()
      await signInWithEmailAndPassword($auth, email, password)
    },
    async logout () {
      const { $auth } = useNuxtApp()
      try {
        await signOut($auth)
        navigateTo('/auth/login')
        this.users = []
        console.log('Logout Users:', this.users)
        
      } catch (error) {
       console.log(error) 
      }
    },
    async resetPassword (email) {
      const { $auth } = useNuxtApp()
      try {
        sendPasswordResetEmail($auth, email)
      } catch (error) {
        console.log(error)
      }
  }
}
})
