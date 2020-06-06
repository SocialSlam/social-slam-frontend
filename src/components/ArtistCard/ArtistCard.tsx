import * as React from 'react'
import Avatar from 'react-avatar'

import './ArtistCard.scss'

interface Artist {
  last_name?: string
  first_name: string
  avatar_image: any
}

interface ArtistCardProps {
  artist: Artist
}

export const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  const artist = props.artist
  const full_name =
    artist.last_name !== undefined
      ? artist.first_name + ' ' + artist.last_name
      : artist.first_name

  return (
    <div className="artist-card">
      <Avatar src={artist.avatar_image} round="80px" />
      <span>{full_name}</span>
    </div>
  )
}
