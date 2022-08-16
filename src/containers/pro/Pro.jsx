import React from "react";
import "./pro.css";
import arrow from "../../assets/arrow.svg";
import proCard from "../../assets/proCard.png";

const Pro = () => {
  return (
    <div className="pro">
      <div className="pro__wrapper">
        <div className="pro__info">
          <div className="pro__info-header">
            <h1>TAPI</h1>
            <h1 className="text-stroke">PRO</h1>
          </div>
          <div className="pro__info-dimension">
            <p>Same as Lite but</p>
            <div className="pro-bold-text">
            <p>
              MADE OF TITANIUM WITH <span className="text-stroke pro-outline">LASER EDGED</span>
            </p>
            </div>
            <span className="pro__info-subtext">Recommended for Professionals and Freelancers</span>
          </div>
          <div className="apply-button">
            <button className="apply bg-green">
              <div className="apply-text">
                Apply Now <img src={arrow} alt="" />
              </div>
            </button>
            <div className="apply-rectangle border-green"></div>
          </div>
        </div>
        <div className="pro-card">
          <img src={proCard} alt="" className="pro-card-svg" />
        </div>
      </div>
    </div>
  );
};

export default Pro;
