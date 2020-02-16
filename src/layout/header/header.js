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
    margin: 0 auto;
    max-width: 320px;
  }
`

Header.displayName = 'Header'

export default Header
