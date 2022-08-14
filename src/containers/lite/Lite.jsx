import React from "react";
import "./lite.css";
import liteCard from "../../assets/tapi lite.svg";
import arrow from "../../assets/arrow.svg";

const Lite = () => {
  return (
    <div className="lite">
      <div className="lite__info">
        <div className="lite__info-header">
          <h1>TAPI</h1>
          <h1 className="text-stroke">LITE</h1>
        </div>
        <div className="lite__info-dimension">
          <p>Weight : 0.10gms</p>
          <p>Size : 85.5mm X 54mm X 0.84mm</p>
          <p>Frequency: 13.56Hz</p>
          <span>Recommended for students</span>
        </div>
        <div className="apply-button">
          <button className="apply bg-orange">
            <div className="apply-text">
              Apply Now <img src={arrow} alt="" />
            </div>
          </button>
          <div className="apply-rectangle border-orange"></div>
        </div>
      </div>
      <div className="lite-card">
        <img src={liteCard} alt="" className="lite-card-svg" />
      </div>
    </div>
  );
};

export default Lite;
