import React from 'react'
import './Home.css'
import { useQuery } from 'react-apollo'

import { Featured, Header, Hero } from '../components'
import GenericList from '../components/GenericList/GenericList';
import ArtistCard from '../components/ArtistCard/ArtistCard';
import { ARTISTS, HOME_FEATURED } from '../queries'

console.log(HOME_FEATURED)

function Home() {
  const { featured, categories = [] } = {}

  let artists = [
    {first_name: "Peter", last_name: "Maffay", avatar_image: "/images/Peter_Maffay.jpg"},
    {first_name: "Heino", avatar_image: "/images/Heino.jpeg"},
  ]

  let artist_list = [];

  artists.forEach(artist => artist_list.push(
    <ArtistCard artist={artist} />
  ));

  return (
    <div className="home container container--fluid">
      <Header />
      <main className="mastcont">
        <Hero />
        <GenericList objectList={artist_list} />
        {featured && <Featured />}
        {categories.length > 0 &&
          categories.map(category => <Category category={category} />)}
      </main>
    </div>
  )
}

export default Home
