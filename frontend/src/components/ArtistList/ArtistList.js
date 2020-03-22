import React from 'react';
import ArtistCard from './ArtistCard/ArtistCard';

import './ArtistList.scss'

class ArtistList extends React.Component {
  render() {

    let artists = [
      {first_name: "Peter", last_name: "Maffay", avatar_image: "/images/Peter_Maffay.jpg"},
      {first_name: "Heino", avatar_image: "/images/Heino.jpeg"},
    ]

    let artist_list = [];

    artists.forEach(artist => artist_list.push(
      <ArtistCard artist={artist} />
    ));

    return(
      <div className="artist-list">
        {artist_list}
      </div>
    )
  }
}

export default ArtistList
