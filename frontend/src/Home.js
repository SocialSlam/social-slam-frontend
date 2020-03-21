import React from 'react'
import './Home.css'
import { Query } from 'react-apollo'

import artists from './queries/artists'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="masthead">
          {/* <img src={logo} className="Home-logo" alt="logo" /> */}
          <h2 className="title tilte--xxl">Social Slam</h2>
          <h2 className="subtitle subtitle--xxl">#wirvsvirus</h2>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <Query query={artists}>
          {({ data, loading }) =>
            loading ? (
              <h2>loading...</h2>
            ) : (
              <ul className="list list--nulled">
                {data.artists.map(a => (
                  <li key={a.id} className="list__item">
                    {a.name}
                  </li>
                ))}
              </ul>
            )
          }
        </Query>
      </div>
    )
  }
}

export default Home
