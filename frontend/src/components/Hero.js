import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHeart } from '@fortawesome/free-solid-svg-icons'

import './Hero.scss'

function Hero() {
  const viewer_count = 426

  return (
    <div className="hero card card--feature">
      <div className="card__content">
        <video width="1280" height="720" controls>
          <source src="https://cf-simple-s3-origin-social-slam-728773676825.s3.eu-central-1.amazonaws.com/WhatsApp+Video+2020-03-22+at+14.36.06.mp4"></source>
        </video>
        <div className="bottom__content">
          <div>
            <h3>Soul Summer Slam</h3>
            <span>Maria</span>
          </div>
          <div className="controls">
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <img src="icons/donation_02.svg" />
            <img src="icons/clap.svg" />
            <FontAwesomeIcon icon={faBell} size="lg" />
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
