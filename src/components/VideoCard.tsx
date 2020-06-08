import * as React from 'react'
import styled from 'styled-components'

export interface Event {
  host: any
  title: string
  datetime: string
  video: any
}
export interface VideoCardProps {
  event: Event
}

const StyledVideoContainer = styled.div`
  margin-right: 20px;
  .host-span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
// const VideoContainer = (props) => {
//   return (
//     <Box
//       id="video-container"
//       sx={{
//         display: 'grid',
//         gridGap: 4,
//         gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
//       }}
//     >
//       {props.streams.map((el, i) => {
//         return <Video key={i} stream={el} totalStreams={props.streams.length} />
//       })}
//     </Box>
//   )
export const VideoCard: React.FC<VideoCardProps> = ({ event }) => {
  const host_full_name =
    event.host.last_name !== undefined
      ? event.host.first_name + ' ' + event.host.last_name
      : event.host.first_name

  return (
    <StyledVideoContainer>
      <StyledVideo
        width="320"
        height="240"
        poster="icons/logo.png"
        stream={event.video}
      />
      <h3>{event.title}</h3>
      <div className="host-span">
        <span>{host_full_name}</span>
        <span>{event.datetime}</span>
      </div>
    </StyledVideoContainer>
  )
}

export interface StyledVideoProps {
  stream: React.MutableRefObject<HTMLVideoElement>
  [htmlProp: string]: any
}

export const StyledVideo: React.FC<StyledVideoProps> = ({
  stream,
  ...props
}) => {
  const VideoEl = styled.video`
    width: 100%;
    height: 100%;
    objectfit: 'cover';
  `

  return <VideoEl autoPlay controls ref={stream} {...props} />
}
