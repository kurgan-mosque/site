import React from 'react'
import styled from 'styled-components'

import Copyright from './copyright'
import Social from './social'
import DumRF from './dumrf'

const Footer = styled(props => (
  <footer {...props}>
    <Social />
    <DumRF />
    <Copyright />
  </footer>
))`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 14px;
  padding: 0 1.5em 1em;
  margin-top: 1.5em;
  background: #efefef;
  color: #666666;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;

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

  ${Social} {
    margin-top: 1em;
  }

  ${DumRF} {
    margin-top: 1em;
  }

  ${Copyright} {
    position: absolute;
    left: 1.5em;
    bottom: 0.5em;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 720px) {
    justify-content: center;
    text-align: center;

    ${Copyright} {
      position: initial;
    }

    ${Social} {
      width: 100%;
    }
  }
`

Footer.displayName = 'Footer'

export default Footer
