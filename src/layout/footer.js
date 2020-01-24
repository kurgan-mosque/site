import React from 'react'
import styled from 'styled-components'

const Footer = styled(props => (
  <footer {...props}>
    © {new Date().getFullYear()} Курганская соборная мечеть
  </footer>
))`
  max-width: 1000px;
  margin: 0 auto;
  background: #986240;
  border-radius: 5px;
  color: #f5f5f5;
  font-size: 14px;
  padding: 1em 1.5em;
  margin-top: 1.5em;
  box-sizing: border-box;
`

Footer.displayName = 'Footer'

export default Footer
