'use strict'

// Get elements
const articlesWrapper = document.querySelector('[data-role=articles-wrapper]')

// Render articles
const articles = [
  {
    id: 1,
	 title: 'Digital Wedding Invitation',
	 description: 'Nam ac mauris at justo adipiscing facilisis. Nunc et velit. Donec.'
  },
 {
   id: 2,
   title: 'Prewedding Videography',
   description: 'Nam ac mauris at justo adipiscing facilisis. Nunc et velit. Donec.'
  },
 {
   id: 3,
   title: 'Prewedding Photography',
   description: 'Nam ac mauris at justo adipiscing facilisis. Nunc et velit. Donec.'
  },
  {
   id: 4,
   title: 'Wedding Organizer',
   description: 'Nam ac mauris at justo adipiscing facilisis. Nunc et velit. Donec.'
  }
]

const createArticle = article => {
  const { id, title, description } = article
  return `
	 <article class="article">
      <div class="article-number">${ id }</div>
      <div>
		  <h1 class="article-title">${ title }</h1>
		  <p class="article-description">${ description }</p>
      </div>
	 </article>
  `
}

const renderArticles = articles => {
  articlesWrapper.innerHTML = articles.map( article => createArticle(article)).join('')
}

// On load
window.addEventListener('load', () => {
  renderArticles(articles)
})
