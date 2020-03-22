import React from 'react';
import ArtistCard from './ArtistCard/ArtistCard';

import './ArtistList.scss'

export class ArtistList extends React.Component {
  render() {

    // TODO: Remove Dummy data and replace with query data
    let artists = [
      {first_name: "Peter", last_name: "Maffay", avatar_image: "/images/Peter_Maffay.jpg"},
      {first_name: "Heino", avatar_image: "/images/Heino.jpeg"},
    ]

    let artist_list = [];

    artists.forEach((artist, i) => artist_list.push(
      <ArtistCard key={i} artist={artist} />
    ));

    return(
      <div>
        <span>Slammer der Woche</span>
        <div className="artist-list">
          {artist_list}
        </div>
      </div>
    )
  }
}

export default ArtistList
