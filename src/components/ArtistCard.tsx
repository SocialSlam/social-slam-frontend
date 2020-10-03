import * as React from 'react'
import styled from 'styled-components'
import {GQLUser} from "../TypeUtils";

interface ArtistCardProps {
  artist: GQLUser
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
  const fullName =
      artist.lastName !== undefined
          ? artist.firstName + ' ' + artist.lastName
          : artist.firstName

  return (
      <StyledArtistCard>
        {/*<Avatar src={artist.avatar_image} round="80px" />*/}
        <span>{fullName}</span>
      </StyledArtistCard>
  )
}
