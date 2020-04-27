import React from 'react';

import landing_page_texts from './landing_page_texts.json';
import './Landing.scss';

function Landing(props){
  return (
    <div className="column landing_page">
      <div className="row header">
        <img src="icons/logo_black.svg"/>
        <section className="column">
          <h1>SOCIAL SLAM</h1>
          <p>{landing_page_texts.header}</p>
        </section>
      </div>
      <div className="row section_row">
        <section className="column">
          <h3>Problem</h3>
          <p>{landing_page_texts.problem}</p>
        </section>
        <section className="column">
          <h3>Strategie</h3>
          <p>{landing_page_texts.strategy}</p>
        </section>
        <section className="column">
          <h3>Lösung</h3>
          <p>{landing_page_texts.solution}</p>
        </section>
      </div>
      <div className="row blue">
        <h2>Ziel der Plattform</h2>
        <p>{landing_page_texts.platform_goal_1}</p>
        <p>{landing_page_texts.platform_goal_2}</p>
      </div>
      <div className="row section_row">
        <section className="column">
          <h3>USP</h3>
          <p>{landing_page_texts.USP}</p>
        </section>
        <section className="column">
          <h3>Zielgruppe</h3>
          <p>{landing_page_texts.demographic}</p>
        </section>
      </div>
      <footer className="row">
        <div>
            <span>contact@socialslam.de</span>
        </div>
        <div className="social_media">
          <span>Folge uns für weitere Informationen auf</span>
          <a href="https://www.facebook.com/SocialSlam.official/" target="_blank">
            <img src="icons/facebook.svg"/>
          </a>
          <a href="https://www.instagram.com/socialslam_official/" target="_blank">
          <img src="icons/instagram.svg"/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Landing
