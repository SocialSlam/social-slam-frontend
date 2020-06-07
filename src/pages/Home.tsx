import * as React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Layout } from '../components/Layout'
import { Featured } from '../components/Featured'
import { GenericList } from '../components/GenericList/GenericList'
import { ArtistCard } from '../components/ArtistCard/ArtistCard'
import { VideoCard } from '../components/VideoCard/VideoCard'

export const Home: React.FC = () => {
  // @ts-ignore
  const { featured, categories = [] } = {}

  const artists = [
    {
      id: 0,
      first_name: 'Peter',
      last_name: 'Maffay',
      avatar_image: '/images/Peter_Maffay.jpg',
    },
    { id: 1, first_name: 'Heino', avatar_image: '/images/Heino.jpeg' },
    {
      id: 2,
      first_name: 'Christina Wocinte',
      avatar_image:
        '/images/Profilbilder/christina-wocintechchat-com-Kpd-JMLeKJk-unsplash.png',
    },
    {
      id: 3,
      first_name: 'Christie Campbell',
      avatar_image:
        'images/Profilbilder/christopher-campbell-rDEOVtE7vOs-unsplash.png',
    },
    {
      id: 4,
      first_name: 'Craig McKay',
      avatar_image: '/images/Profilbilder/craig-mckay-jmURdhtm7Ng-unsplash.png',
    },
    {
      id: 5,
      first_name: 'Dan',
      avatar_image: '/images/Profilbilder/dan-ROJFuWCsfmA-unsplash.png',
    },
    {
      id: 6,
      first_name: 'Eddy Klaus',
      avatar_image: '/images/Profilbilder/eddy-klaus-BHNxfaeNCTI-unsplash.png',
    },
    {
      id: 7,
      first_name: 'Roberto Blanco',
      avatar_image: '/images/Roberto_Blanco.jpg',
    },
    {
      id: 8,
      first_name: 'Svetlana Pochatun',
      avatar_image:
        '/images/Profilbilder/svetlana-pochatun-piIgyF0-gcY-unsplash.png',
    },
    {
      id: 9,
      first_name: 'Yucel Moran',
      avatar_image: '/images/Profilbilder/yucel-moran-nd0AqhGk5ZI-unsplash.png',
    },
  ]

  const poetry_event_objects = [
    {
      id: 0,
      datetime: '21.03.20',
      video:
        'https://cf-simple-s3-origin-social-slam-728773676825.s3.eu-central-1.amazonaws.com/julie2.mp4',
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
          {artists.length > 0 &&
            artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
        </GenericList>
      </div>
      <div className="card card--feature">
        <GenericList
          className="card__content"
          header="Mehr aus der Kategory Musik"
        >
          {poetry_event_objects.length > 0 &&
            poetry_event_objects.map((event) => (
              <VideoCard key={event.id} event={event} />
            ))}
        </GenericList>
      </div>
      {featured && <Featured />}
      {/*{categories.length > 0 &&*/}
      {/*  categories.map(category => (*/}
      {/*    <Category key={category.id} category={category} />*/}
      {/*  ))}*/}
    </Layout>
  )
}
