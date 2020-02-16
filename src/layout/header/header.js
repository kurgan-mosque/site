import React from 'react'
import styled from 'styled-components'

import Menu from './menu'
import Logo from './logo'

const Header = styled(props => (
  <header {...props}>
    <Logo />
    <Menu />
  </header>
))`
  margin: 0 auto;

  ${Logo} {
    margin: 0.5em auto;
    max-width: 320px;
    display: block;
  }

  :before {
    content: '';
    display: block;
    height: 4px;
    width: 100%;
    background-color: rgba(51, 167, 128, 0.9);
  }
`

Header.displayName = 'Header'

export default Header
