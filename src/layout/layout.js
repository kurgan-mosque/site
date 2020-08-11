/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import Main from './main'
import Aside from './aside'
import './layout.css'

const Layout = styled(({ children, ...props }) => (
  <div {...props}>
    <Header />
    <Main>
      {children}
      <Aside />
    </Main>
    <Footer />
  </div>
))`
  position: relative;
  min-height: 100vh;

  ${Main} {
    padding-bottom: 10em;
    position: relative;
    box-sizing: border-box;

    padding-right: 230px;
    @media (max-width: 800px) {
      padding-right: 30px;
    }

    & > aside {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;

      @media (max-width: 800px) {
        display: none;
      }
    }

    @media (max-width: 1000px) {
      padding-left: 30px;
    }
  }

  ${Footer} {
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
  }

  @media (max-width: 640px) {
    ${Footer} {
      position: initial;
    }

    ${Main} {
      padding-bottom: initial;
    }
  }
`

export default Layout
