import { defineStore } from 'pinia'
import type { NewsItem } from '~~/types/my-types'
export const useNewsStore = defineStore('newsStore',  {
  state: () => ({           
    news: [] as NewsItem[],
    loading: true,
    error: null as any
  }),

  getters: {    
    sortedNews: (state) => {
      return [...state.news].sort((a, b) => {
        const aId = typeof a.id === 'number' ? a.id : Number(a.id) || 0
        const bId = typeof a.id === 'number' ? b.id : Number(b.id) || 0
        return bId - aId
      })
    },
    newsCount: (state) => state.news.length
  },

  actions: { 
    async fetchNews(force = false) { 
      // 0. Memory Cache check
      if (this.news.length > 0 && !force) return

      // Do nothing on server side to prevent SSR API calls; leave it for client onMounted
      if (process.server) return

      // 1. Client-Side SessionStorage Cache Check (Runs on page refresh / F5)
      if (!force) {
        try {
          const cached = window.sessionStorage.getItem('vulture_news_cache')
          if (cached) {
            const parsed = JSON.parse(cached)
            if (Array.isArray(parsed) && parsed.length > 0) {
              this.news = parsed
              this.loading = false
              console.log('⚡ [SUCCESS] Loaded from SessionStorage cache:', this.news.length, 'items (Supabase API call BLOCKED!)')
              return
            }
          }
        } catch (e) {
          console.warn('SessionStorage cache read error:', e)
        }
      }

      // 2. Fetch from Supabase API endpoint ONLY if cache does not exist
      console.log('📡 Fetching from Supabase API (No SessionStorage cache found)...')
      this.loading = true
      this.error = null

      try {
        const data = await $fetch<NewsItem[]>('/api/news')
        this.news = data
        
        // Save to SessionStorage
        if (Array.isArray(data) && data.length > 0) {
          window.sessionStorage.setItem('vulture_news_cache', JSON.stringify(data))
          console.log('💾 Saved to SessionStorage: vulture_news_cache (', data.length, 'items )')
        }
      } catch (error: any) {
        console.error('News fetch error:', error)
        this.error = error.message || error
      } finally {
        this.loading = false
      }       
    },

    async refreshNews() {
      this.news = []
      if (process.client) {
        window.sessionStorage.removeItem('vulture_news_cache')
      }
      await this.fetchNews(true)
    }  
  }
})
