import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Hero.scss';

function Hero() {

  const viewer_count = Math.floor(Math.random() * 1000);

  return (
    <div className="hero card card--feature">
      <div className="card__content">
          <video width="1280" height="720" controls>
            <source src="/videos/HD Epic Sax Gandalf.mp4"></source>
          </video>
          <div className="bottom__content">
            <div>
              <h3>Mega Slam </h3>
              <span>Paul Kalkbrenner</span>
            </div>
            <div className="controls">
                <FontAwesomeIcon icon="heart" size="lg" />
                <img src="icons/donation_02.svg" />
                <img src="icons/clap.svg" />
                <FontAwesomeIcon icon="bell" size="lg" />
            </div>
            <div>
              <span>Viewers: </span>
              <span>{viewer_count}</span>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Hero
