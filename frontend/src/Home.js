import React from 'react'
import './Home.css'
import { useQuery } from 'react-apollo'

import ARTISTS from './queries/artists'

function Home() {
  const { loading, error, data } = useQuery(ARTISTS)

  if (loading) {
    return 'loading...'
  }

  if (error) {
    return `Error: ${error.message}`
  }

  return (
    <div className="Home">
      <header className="masthead">
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        <h2 className="title tilte--xxl">Social Slam</h2>
        <h2 className="subtitle subtitle--xxl">#wirvsvirus</h2>
      </header>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> or <code>src/Home.js</code>{' '}
        and save to reload.
      </p>
      <ul className="list list--nulled">
        {data.artists.map((a) => (
          <li key={a.id} className="list__item">
            {a.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
