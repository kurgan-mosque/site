import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from 'layout'
import SEO from 'seo'

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

    <p>
      Тел: <a href="tel:+79129790563">+7 (912)979-05-63</a>
      <br />
      <br />
      <address>
        Адрес :{' '}
        <a target="_blank" href="https://yandex.ru/maps/-/CKA4aD1q">
          Россия, Курганская область, г. Курган, ул. Сибирская, 2/2
        </a>
      </address>
      <br />
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CKA4aD1q"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
    </p>
  </Layout>
)

Chairman.displayName = 'Chairman'

export default Chairman
