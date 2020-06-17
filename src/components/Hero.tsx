import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import styled from 'styled-components'
import iconClap from 'url:../assets/icons/clap.svg'
import iconDonation from 'url:../assets/icons/donation_02.svg'

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .card__content {
    width: 1300px;
    margin: auto;
    .bottom__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .controls {
        display: flex;
        flex-direction: row;
        img {
          max-height: 26px;
          max-width: 80px;
          margin-left: 10px;
          margin-right: 10px;
        }
        .svg-inline--fa {
          margin-left: 10px;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }
  }
`

export const Hero: React.FC = () => {
  const viewer_count = 426

  return (
    <StyledHero>
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
            <FontAwesomeIcon icon="heart" size="lg" />
            <img src={iconDonation} />
            <img src={iconClap} />
            <FontAwesomeIcon icon="bell" size="lg" />
          </div>
          <div>
            <span>Viewers:</span>
            <span>{viewer_count}</span>
          </div>
        </div>
      </div>
    </StyledHero>
  )
}
