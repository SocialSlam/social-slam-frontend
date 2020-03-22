import React from 'react'

import {
  ArtistCard,
  Featured,
  GenericList,
  Hero,
  VideoCard,
} from '../components'

import './Home.scss'
import { Layout } from '../components'

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
    { id: 2, first_name: 'Roberto Blanco', avatar_image: '/images/Roberto_Blanco.jpg'},
  ]

  let poetry_event_objects = [
    {
      id: 0,
      datetime: '21.03.20',
      video: 'https://cf-simple-s3-origin-social-slam-728773676825.s3.eu-central-1.amazonaws.com/julie2.mp4',
      title: 'Fetzige Gesangsparade',
      host: artists[0],
    },
    {
      id: 1,
      datetime: '27.04.20',
      video: '/videos/HD Epic Sax Gandalf.mp4',
      title: 'Corona verliert! #Wirvsvirus',
      host: artists[1],
    },
  ]

  return (
    <Layout>
      <Hero />
      <div className="card card--feature">
        <GenericList className="card__content" header="Slammer der Woche">
          { artists.length > 0 && artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </GenericList>
      </div>
      <div className="card card--feature">
        <GenericList className="card__content" header="Mehr aus der Kategory Musik">
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
    </Layout>
  )
}

export default Home
