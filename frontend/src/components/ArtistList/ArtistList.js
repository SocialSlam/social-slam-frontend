import React from 'react'
import ArtistCard from './ArtistCard/ArtistCard'

import './ArtistList.scss'

export class ArtistList extends React.Component {
  render() {
    // TODO: Remove Dummy data and replace with query data
    let artists = [
      {
        id: 0,
        first_name: 'Peter',
        last_name: 'Maffay',
        avatar_image: '/images/Peter_Maffay.jpg',
      },
      { id: 1, first_name: 'Heino', avatar_image: '/images/Heino.jpeg' },
    ]

    return (
      <div>
        <span>Slammer der Woche</span>
        <div className="artist-list">
          {artists.length > 0 &&
            artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
        </div>
      </div>
    )
  }
}

export default ArtistList
