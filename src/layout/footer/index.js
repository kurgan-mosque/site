import React from 'react'
import styled from 'styled-components'

import Copyright from './copyright'
import Social from './social'
import DumRF from './dumrf'
import Contacts from './contacts'

const Footer = styled((props) => (
  <footer {...props}>
    <div>
      <Social />
      <Contacts />
      <Copyright />
    </div>
  </footer>
))`
  font-size: 14px;
  background: #efefef;
  color: #666666;
  border-top: 1px solid #dbdbdb;

  > div {
    position: relative;
    margin: 0 auto;
    padding: 0 1.2em 0.75em;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;

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
`

export default Footer
