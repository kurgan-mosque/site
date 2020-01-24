import React from 'react'
import { Link } from 'gatsby'

import Layout from 'layout'
import Image from 'layout/image'
import SEO from 'seo'

import salaahTime from 'images/salaah-01-2020.jpg'

const Index = () => (
  <Layout>
    <SEO title="Главная" />
    <article>
      <img src={salaahTime} style={{ maxWidth: '100%' }} />
    </article>
  </Layout>
)

Index.displayName = 'Index'

export default Index
