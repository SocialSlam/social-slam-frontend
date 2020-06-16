import * as React from 'react'
import SimplePeer from 'simple-peer'
import styled from 'styled-components'

export interface VideoContainerProps {
  streams?: Record<string, SimplePeer.Instance>
  userMedia: React.MutableRefObject<HTMLVideoElement>
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

export const VideoContainer: React.FC<VideoContainerProps> = ({
  userMedia,
  streams,
}) => {
  return (
    <React.Fragment>
      <StyledVideo stream={userMedia} />
      {streams &&
        Object.values(streams).map((el) => {
          const ref = React.useRef<HTMLVideoElement>()

          React.useEffect(() => {
            el.on('stream', (stream) => {
              ref.current.srcObject = stream
            })
          }, [])
          return <StyledVideo stream={ref} />
        })}
    </React.Fragment>
  )
}
