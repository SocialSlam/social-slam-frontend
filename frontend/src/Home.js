import React from 'react'
import './Home.css'
import graphql from 'graphql-tag'
import { Query } from 'react-apollo'

const COMPANIES = graphql`
  {
    allCompanies {
      id
      name
      industry
    }
  }
`

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
        <Query query={COMPANIES}>
          {({ data, loading }) =>
            loading ? (
              <h2>loading...</h2>
            ) : (
              <ul className="list list--nulled">
                {data.allCompanies.map(c => (
                  <li key={c.id} className="list__item">
                    {c.name} ({c.industry})
                  </li>
                ))}
              </ul>
            )
          }
        </Query>
        {/* <ul className="list list--nulled">
          <li className="list__item">
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li className="list__item">
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li className="list__item">
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul> */}
      </div>
    )
  }
}

export default Home
