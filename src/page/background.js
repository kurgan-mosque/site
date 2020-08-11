import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default styled((props) => {
  const image = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/mosque/panoramic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={image.fileName.childImageSharp.fluid}
      alt="Курганская соборная мечеть"
      {...props}
    />
  )
})`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(1px);
  opacity: 0.4;
`
