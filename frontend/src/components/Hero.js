import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Hero.scss';

function Hero() {
  return (
    <div className="hero card card--feature">
      <div className="card__content">
          <video width="720" height="480" controls>
            <source src="/videos/HD Epic Sax Gandalf.mp4"></source>
          </video>
          <div>
            <div>
              <h3>Mega Slam </h3>
              <span>Paul Kalkbrenner</span>
            </div>
            <div className="controls">
                <FontAwesomeIcon icon="heart" size="lg" />
            </div>
          </div>
      </div>
  </div>
  )
}

export default Hero
