import React from 'react'

import {
  ArtistCard,
  Featured,
  GenericList,
  Header,
  Hero,
  VideoCard,
} from '../components'

import './Home.scss'

function Home() {
  const { featured, categories = [] } = {}

  let artists = [
    {
      id: 0,
      first_name: 'Peter',
      last_name: 'Maffay',
      avatar_image: '/images/Peter_Maffay.jpg',
    },
    { id: 1, first_name: 'Heino', avatar_image: '/images/Heino.jpeg' },
  ]

  let poetry_event_objects = [
    {
      id: 0,
      datetime: '21.03.20',
      video: '/videos/HD Epic Sax Gandalf.mp4',
      title: 'Mega Poetry Slam 2020',
      host: artists[0],
    },
    {
      id: 1,
      datetime: '21.03.20',
      video: '/videos/HD Epic Sax Gandalf.mp4',
      title: 'Mega Poetry Slam 2020',
      host: artists[0],
    },
  ]

  return (
    <div className="home container container--fluid">
      <Header />
      <main className="mastcont">
        <Hero />
        <div className="card card--feature">
          <GenericList className="card__content" header="Slammer der Woche">
            { artists.length > 0 && artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </GenericList>
        </div>
        <div className="card card--feature">
          <GenericList className="card__content" header="Mehr aus der Kategory Poesie">
            { poetry_event_objects.length > 0 && poetry_event_objects.map(event => (
              <VideoCard key={event.id} event={event} />
            ))}
          </GenericList>
        </div>
        {featured && <Featured />}
        {categories.length > 0 &&
          categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
      </main>
    </div>
  )
}

export default Home
