import React from 'react';
import Avatar from 'react-avatar';

import './ArtistCard.scss';

class ArtistCard extends React.Component {

  render() {
    let artist = this.props.artist;

    let full_name = artist.last_name !== undefined ? artist.first_name + " " + artist.last_name : artist.first_name ;
    return (
      <div className='artist-card'>
        <Avatar src={artist.avatar_image} round="80px" />
        <span>{full_name}</span>
      </div>
    )
  }
}

export default ArtistCard
