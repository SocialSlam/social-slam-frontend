import React from 'react'
import './Home.css'
import { useQuery } from 'react-apollo'

import { ArtistList, Featured, Header, Hero } from '../components'
import { HOME_FEATURED } from '../queries'

function Home() {
  const { featured, categories = [] } = {}

  console.log(featured)

  return (
    <div className="home container container--fluid">
      <Header />
      <main className="mastcont">
        <Hero />
        <ArtistList />
        {featured && <Featured />}
        {categories.length > 0 &&
          categories.map(category => <Category key={category.id} category={category} />)}
      </main>
    </div>
  )
}

export default Home
