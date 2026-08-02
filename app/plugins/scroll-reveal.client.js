export default defineNuxtPlugin((nuxtApp) => {
  // Vue Custom Directive v-reveal
  nuxtApp.vueApp.directive('reveal', {
    mounted(el) {
      el.classList.add('scroll-reveal')
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed')
          }
        })
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      })

      observer.observe(el)
      el._revealObserver = observer
    },
    unmounted(el) {
      if (el._revealObserver) {
        el._revealObserver.disconnect()
      }
    }
  })

  // Global Auto Observer for Cards and Sections
  if (process.client) {
    const autoObserve = () => {
      const selectors = '.blog-wrapper, .blog-card, .card, .updates, .block, .blog-card-wrap'
      const elements = document.querySelectorAll(selectors)

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      })

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal')
        }
        observer.observe(el)
      })
    }

    nuxtApp.hook('page:finish', () => {
      setTimeout(autoObserve, 200)
    })

    window.addEventListener('load', () => {
      setTimeout(autoObserve, 200)
    })
  }
})
