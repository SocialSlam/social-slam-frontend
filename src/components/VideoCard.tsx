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

export const VideoCard: React.FC<VideoCardProps> = ({ event }) => {

  const host_full_name =
    event.host.last_name !== undefined
      ? event.host.first_name + ' ' + event.host.last_name
      : event.host.first_name

  return (
    <div className="video-card">
      <video width="320" height="240" controls poster="icons/logo.png">
        <source src={event.video} type="video/mp4" />
      </video>
      <h3>{event.title}</h3>
      <div className="host-span">
        <span>{host_full_name}</span>
        <span>{event.datetime}</span>
      </div>
    </div>
  )
}
