import type { NewsItem } from "~~/types/my-types"

export default defineEventHandler(async (event): Promise<NewsItem[]> => {
  const url = 'https://raw.githubusercontent.com/Lim-JongTae/vulture-news/refs/heads/main/news.json' 
  
  try {
    const raw = await $fetch<string>(url, {
      method: 'GET', 
      responseType: 'text'
      })
    const parsed = JSON.parse(raw.trim())
   
    console.log('New Loaded:', parsed.length)
    return Array.isArray(parsed) ? parsed : []
  } catch(e) {
    console.error('News parse Error:', e)
    return []
  }  
})

