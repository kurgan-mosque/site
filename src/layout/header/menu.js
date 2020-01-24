import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const menu = [
  ['chairman', 'Председатель (Раис) - Зиедали Мизробов'],
  ['', 'Главная'],
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
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
))`
  background: #314b4a;
  border-radius: 5px;

  ul {
    list-style: none;
    padding: 0.5em;

    li {
      display: inline-block;
      padding: 0.5em 1em;
    }
  }

  a {
    color: #f5f5f5;
    text-decoration: none;

    :hover {
      color: #cb6a2d;
    }
  }
`

Menu.displayName = 'Menu'

export default Menu
