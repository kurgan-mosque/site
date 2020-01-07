import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "chairman.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Chairman = ({ data }) => (
  <Layout>
    <SEO title="Председатель (Раис)" />
    <h1>
      <center>Председатель (Раис) - Зиедали Мизробов</center>
    </h1>
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Зиедали Мизробов"
      style={{ maxWidth: 500 }}
    />
    <p>
      Председатель (Раис) Курганской городской религиозной организации мусульман
      Зиедали Курбанович Мизробов работает 24 часа в сутки. Днем он, как
      религиозный деятель, проводит обряды (никах, жаназа, курбандык, хатымы,
      поминальные дуа, имянаречение…) по всей области, иногда выезжая по
      приглашению в соседние приграничные районы Тюменской области и Казахстана.
    </p>
  </Layout>
)

Chairman.displayName = 'Chairman'

export default Chairman
