import React from "react";
import "./hero.css";
import { Navbar } from "../../components";
import heroCard from "../../assets/heroCard.svg";
import scroll from "../../assets/scroll.svg";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero__section">
        <div className="hero__section-innerDiv">
          <div className="hero__section-innerDiv-left">
            <h1>
              <p>
              TAP IT
              </p>
              <p>
              ON THE GO
              </p>
            </h1>
            <h3>Business cards just got smarter</h3>
            <div className="apply-button">
              <button className="apply bg-green">Apply Now</button>
              <div className="apply-rectangle border-green"></div>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <img src={scroll} alt="" className="hero__scroll-scroller" />
        </div>
      </div>
      <div className="hero__card">
        <img
          src={heroCard}
          alt="TapI Card"
          className="hero__section-heroCard"
        />
      </div>
      <div className="hero__secondary-text">
        <div className="hero__seconday-text-main">
          <p>It's the card you should </p> <p>have in your wallet</p>
        </div>
        <div className="hero__secondary-text-side">
          <p>
          Bold and stylish business cards
          </p>
          <p>
          specifically designed to increase your
          </p>
           <p>
            chance of making a lasting impression.
           </p>
        </div>
        <div className="hero__secondary-text-buttons">
          <button className="apply bg-green secondary">Apply now</button>
          <button className="learn border-green secondary">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
