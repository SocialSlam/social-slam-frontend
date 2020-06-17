import * as React from 'react'
import Avatar from 'react-avatar'
import styled from 'styled-components'

interface Artist {
  last_name?: string
  first_name: string
  avatar_image: any
}

interface ArtistCardProps {
  artist: Artist
}

const StyledArtistCard = styled.div`
  position: relative;
  font-weight: 600;
  margin-right: 20px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  const artist = props.artist
  const full_name =
    artist.last_name !== undefined
      ? artist.first_name + ' ' + artist.last_name
      : artist.first_name

  return (
    <StyledArtistCard>
      <Avatar src={artist.avatar_image} round="80px" />
      <span>{full_name}</span>
    </StyledArtistCard>
  )
}
