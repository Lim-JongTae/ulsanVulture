import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supabaseUrl = process.env.SUPABASE_URL || config.supabaseUrl || 'https://qdtktbjlnpkhjwmtzypb.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY || config.supabaseKey || ''

  if (supabaseUrl && supabaseKey) {
    try {
      console.log('🔗 Connecting to Supabase REST API:', supabaseUrl)
      
      // Attempt 1: Fetch from 'News' table (case-sensitive)
      const response = await $fetch<any[]>(`${supabaseUrl}/rest/v1/News?select=*&order=id.desc`, {
        method: 'GET',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`
        }
      })

      if (Array.isArray(response) && response.length > 0) {
        console.log('✅ Success: Loaded', response.length, 'news items directly from Supabase DB (News)!')
        // Normalize fields for AppNews component compatibility
        return response.map(item => ({
          id: item.id,
          title: item.title,
          url: item.url,
          name: item.name || item.source_name || item.site_name || '',
          author: item.author || item.author_name || '울산독수리',
          description: item.description || item.desc || '',
          urlToImage: item.urlToImage || item.url_to_image || item.image_url || item.thumbnail || '',
          publishedAt: item.publishedAt || item.published_at || item.created_at || new Date().toISOString(),
          content: item.content || item.summary || item.body || ''
        }))
      }
    } catch (error: any) {
      console.warn('⚠️ Supabase REST API error:', error?.message || error)
    }
  }

  // Fallback to GitHub raw source if Supabase table is empty or errored
  console.log('🔄 Fallback to GitHub news data source...')
  try {
    const rawUrl = 'https://raw.githubusercontent.com/Lim-JongTae/vulture-news/refs/heads/main/news.json'
    const rawData = await $fetch<any[]>(rawUrl)
    return rawData
  } catch (err) {
    console.error('Failed to fetch fallback news:', err)
    return []
  }
})
