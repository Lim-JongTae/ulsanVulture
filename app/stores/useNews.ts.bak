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
    async fetchNews() { 
      if (this.news.length > 0) return
      this.loading = true
      this.error = null

      try {
        const url = 'https://raw.githubusercontent.com/Lim-JongTae/vulture-news/refs/heads/main/news.json'
        const raw = await $fetch<string>(url, {
          method: 'GET',
          responseType: 'text'
        })
        this.news = JSON.parse(raw)
        console.log('News Loaded:', this.news.length, 'items')
      } catch (error: any) {
        console.error('News fetch error:' , error)
      } finally {
        this.loading = false
      }       
  },
  async refreshNews() {
    this.news = []
    await this.fetchNews()
  }  
}
})
