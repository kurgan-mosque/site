import React from 'react'
import styled from 'styled-components'

const links = [
  ['http://islam-today.ru/', 'Все про мусульман'],
  ['http://golosislama.com', 'ГолосИслама'],
  ['http://www.ansar.ru/', 'Информационно-аналитический канал «АНСАР»'],
  ['http://islamcenter.ru/', 'ИсламЦентр - Интернет-каталог мечетей'],
  ['http://namazvdom.com/#wudu1', 'Омовение'],
  ['http://namazvdom.com/#salah1', 'Намаза']
]

const Links = styled(props => (
  <section {...props}>
    <h3>Полезные ссылки</h3>
    <ul>
      {links.map(([url, title]) => (
        <li key={url}>
          <a target="_blank" href={url}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  </section>
))`
  font-size: 14px;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5em 0;
    }
  }

  a {
    color: #986240;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

Links.displayName = 'Links'

export default Links
