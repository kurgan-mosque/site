import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from 'layout'
import SEO from 'seo'
import PostList from 'page/post/list'
import Header from 'page/header'

const title = 'Фетвы'

const Fatwa = ({ data }) => {
  const list = data?.allMarkdownRemark?.nodes.map(
    ({ frontmatter: { title }, fields: { slug }, excerpt }) => ({
      title,
      slug,
      excerpt
    })
  )
  return (
    <Layout>
      <SEO title={title} />
      <Header>{title}</Header>
      <PostList list={list} />
    </Layout>
  )
}

Fatwa.displayName = 'Fatwa'

export default Fatwa

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/fatwa/" } } }) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
