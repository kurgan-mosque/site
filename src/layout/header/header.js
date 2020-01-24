import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Menu from './menu'
import logo from './logo.png'

const Header = styled(props => (
  <header {...props}>
    <h1>
      <Link to="/">
        <img src={logo} alt="mosque" />
      </Link>
    </h1>
    <Menu />
  </header>
))`
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    font-size: 0;
    img {
      max-width: 100%;
    }
  }
`

Header.displayName = 'Header'

export default Header
