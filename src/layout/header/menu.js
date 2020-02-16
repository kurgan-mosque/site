import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const menu = [
  ['', 'Главная'],
  ['imams', 'Имамы'],
  ['news', 'Новости'],
  ['nikah', 'Никах'],
  ['salaah-for-women', 'Намаз для женщин'],
  ['basics-of-islam', 'Основы Ислама'],
  ['quran-and-its-sciences', 'Коран и его науки'],
  ['allowed-and-forbidden-in-islam', 'Дозволенное и запретное в Исламе'],
  ['dua', 'Дуа - оружие мусульманина'],
  ['paradise', 'Достоверно о Рае']
]

const Menu = styled(props => (
  <nav {...props}>
    <ul>
      {menu.map(([path, label]) => (
        <li>
          <Link to={path} activeClassName="active">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
))`
  background-color: rgba(51, 167, 128, 0.9);

  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 1000px;

    li {
      display: inline-block;
    }
  }

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    padding: 1em;

    &:hover,
    &.active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

Menu.displayName = 'Menu'

export default Menu
