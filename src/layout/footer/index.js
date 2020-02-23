import React from 'react'
import styled from 'styled-components'

import Links from './links'
import Copyright from './copyright'

const Footer = styled(props => (
  <footer {...props}>
    <Copyright />
    <Links />
  </footer>
))`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 14px;
  padding: 1em 1.5em;
  margin-top: 1.5em;
  background: #efefef;
  color: #666666;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  &:before {
    content: '';
    display: block;
    height: 100%;
    width: calc(100vw - 15px);
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-top: 1px solid #dbdbdb;
    background: #efefef;
    z-index: -1;
  }
}
`

Footer.displayName = 'Footer'

export default Footer
