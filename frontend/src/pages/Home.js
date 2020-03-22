import React from 'react'

import { Featured, Header, Hero } from '../components'
import GenericList from '../components/GenericList/GenericList';
import VideoCard from '../components/VideoCard/VideoCard';
import ArtistCard from '../components/ArtistCard/ArtistCard';
import { Featured, Header, Hero } from '../components'

import './Home.scss'

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

  let poetry_event_objects = [
    {
      datetime: "21.03.20",
      video: "/videos/HD Epic Sax Gandalf.mp4",
      title: "Mega Poetry Slam 2020",
      host: artists[0],
    },
    {
      datetime: "21.03.20",
      video: "/videos/HD Epic Sax Gandalf.mp4",
      title: "Mega Poetry Slam 2020",
      host: artists[0],
    },
  ]

  let poetry_events = []

  poetry_event_objects.forEach(event => poetry_events.push(
    <VideoCard event={event} />
  ));

  return (
    <div className="home container container--fluid">
      <Header />
      <main className="mastcont">
        <Hero />
        <GenericList header="Slammer der Woche" objectList={artist_list} />
        <GenericList header="Mehr aus der Kategory Poesie" objectList={poetry_events} />
        {featured && <Featured />}
        {categories.length > 0 &&
          categories.map(category => <Category key={category.id} category={category} />)}
      </main>
    </div>
  )
}

export default Home
