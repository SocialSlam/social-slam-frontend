import React from 'react'
import './Home.css'
import { useQuery } from 'react-apollo'

import { Featured, Header, Hero } from '../components'
import ArtistList from '../components/ArtistList/ArtistList';
import { ARTISTS, HOME_FEATURED } from '../queries'

console.log(HOME_FEATURED)

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
          categories.map(category => <Category category={category} />)}
      </main>
    </div>
  )
}

export default Home
