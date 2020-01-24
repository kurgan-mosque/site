import React from 'react'

import Layout from 'components/layout'
import SEO from 'seo'

import salaahTime from 'images/salaah-01-2020.jpg'

const News = () => (
  <Layout>
    <SEO title="Новости" />
    <h1>Новости</h1>
    <article>
      <img src={salaahTime} style={{ maxWidth: '100%' }} />
    </article>
  </Layout>
)

News.displayName = 'News'

export default News
