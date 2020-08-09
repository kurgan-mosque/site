import React from 'react'
import styled from 'styled-components'

import Copyright from './copyright'
import Social from './social'
import DumRF from './dumrf'
import Contacts from './contacts'

const Footer = styled((props) => (
  <footer {...props}>
    <Social />
    <Contacts />
    <DumRF />
    <Copyright />
  </footer>
))`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 14px;
  padding: 0 1.5em 0.75em;
  margin-top: 1.5em;
  background: #efefef;
  color: #666666;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
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

  ${Contacts} {
    flex-grow: 2;
    align-self: start;
    margin: 1em 1em 0;
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
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;

    > * {
      width: 100%;
      text-align: center;
      justify-content: center;
    }

    ${Copyright} {
      position: initial;
    }
  }
`

Footer.displayName = 'Footer'

export default Footer
