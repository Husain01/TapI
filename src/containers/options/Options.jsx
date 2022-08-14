import React from "react";
import "./options.css";
import handCard from '../../assets/handCard.svg';
import { Controller, Scene } from 'react-scrollmagic';


const Options = () => {
  return (
    <Controller>
     
    <div className="options">
      <div className="options__header">
          <h1>
          Anywhere. Anytime. Anyone.
          </h1>
          </div>
          <div className="options__section">
      <div className="options__header-options">
        <div className="options__header-option">
          <div className="options__sideline"></div>
          <div className="options__content">
          <h2>For Students</h2>
          <p>
            Everyone knows you’re a student, but your card will help people
            remember what you studied.
          </p>
          </div>
        </div>
        <div className="options__header-option">
          <div className="options__sideline"></div>
          <div className="options__content">
          <h2>For Freelancers</h2>
          <p>
            First impression should be your best impression for your upcoming
            project!
          </p>
          </div>
        </div>
        <div className="options__header-option">
          <div className="options__sideline"></div>
          <div className="options__content">
          <h2>For Professionals</h2>
          <p>Make winning business connections easy</p>
          </div>
        </div>
      </div>
      <Scene indicators={true} triggerHook="0" offset={-200} duration="30%" pin={true} enabled={true} >
      <div className="options__card">
          <img src={handCard} alt="Card" className="options__card-hand"/>
      </div>
    </Scene>
          </div>
    </div>
    </Controller>
  );
};

export default Options;
