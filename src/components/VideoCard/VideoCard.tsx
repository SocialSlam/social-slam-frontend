import * as React from 'react';

import './VideoCard.scss';

export interface Event {
  host:any
  title:string
  datetime:string
  video:any
}
export interface VideoCardProps {
event:Event
}

export class VideoCard extends React.Component<VideoCardProps> {
  render() {
    const {event} = this.props;

    const host_full_name = event.host.last_name !== undefined ? event.host.first_name + " " + event.host.last_name : event.host.first_name ;

    return(
      <div className="video-card">
        <video width='320' height='240' controls>
          <source src={event.video} type="video/mp4"/>
        </video>
        <h3>{event.title}</h3>
        <div className="host-span">
          <span>
            {host_full_name}
          </span>
          <span>
            {event.datetime}
          </span>
        </div>
      </div>
    )
  }
}
