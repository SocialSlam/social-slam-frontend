import React from 'react';
import './ArtistCard.scss';

class ArtistCard extends React.Component {

  render() {
    return (
      <div className='artist-card'>
        <div className='avatar-image'>
          <img src={this.props.artist.avatar_image}></img>
        </div>
        <div>
          <span>{this.props.artist.first_name}</span>
          <span>{this.props.artist.last_name}</span>
        </div>
      </div>
    )
  }
}

export default ArtistCard
