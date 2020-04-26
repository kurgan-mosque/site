import React from 'react'

import Layout from 'layout'
import SEO from 'page/seo'

import AnnotationList from './annotation/list'
import Header from './header'

export const PageList = ({ list, title }) => (
  <Layout>
    <SEO title={title} />
    <Header>{title}</Header>
    <AnnotationList list={list} />
  </Layout>
)

PageList.displayName = 'PageList'

export default PageList
