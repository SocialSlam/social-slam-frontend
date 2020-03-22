import React from 'react'
import './Home.css'
import { useQuery } from 'react-apollo'

import { Featured, Header, Hero } from '../components'
import { ARTISTS, HOME_FEATURED } from '../queries'

console.log(HOME_FEATURED)

function Home() {
  const { featured, categories = [] } = {}

  return (
    <div className="home container container--fluid">
      <Header />
      <main className="mastcont">
        <Hero />
        {featured && <Featured />}
        {categories.length > 0 &&
          categories.map(category => <Category category={category} />)}
      </main>
    </div>
  )
}

export default Home
