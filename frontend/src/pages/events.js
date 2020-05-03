import React from 'react'
import { Query } from 'react-apollo'

import events from './queries/events'

function Events() {
  return (
    <Query query={events}>
      {({ data, loading }) =>
        loading ? (
          <h2>loading...</h2>
        ) : (
          <ul className="list list--nulled">
            {data.events.map((event) => (
              <li key={event.id} className="list__item">
                {event.name}
              </li>
            ))}
          </ul>
        )
      }
    </Query>
  )
}

export default Events
