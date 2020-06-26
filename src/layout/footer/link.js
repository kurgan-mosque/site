import styled from 'styled-components'

const Link = styled.a`
  color: #33a67f;
  text-decoration: none;
  transition: all 0.2s;

  &:hover,
  &:focus {
    color: #31846d;
    text-decoration: underline;
  }
`

export default Link
