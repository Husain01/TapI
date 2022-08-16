import React from "react";
import "./reviews.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-wrapper">
        <h1 className="reviews__header">
          HEAR WHAT PEOPLE HAVE TO SAY ABOUT US
        </h1>
        <div className="reviews__cards-section">
          <div className="reviews__card">
            <div className="reviews__card-content">
              <p>
                I'm so glad I found Tapi. The quality of their cards are the
                best I've ever had. The colors are vibrant, and the paper is
                thick. I definitely recommend them for business cards!
              </p>
            </div>
            <div className="reviews__card-author">
              <div className="reviews__card-author-dp">
                <img src={avatar1} alt="" />
              </div>
              <div className="reviews__card-author-text">
                
              <h1 className="reviews__card-author-name">LIAM PAYNE</h1>
              <h3 className="reviews__card-author-title">PRODUCT DESIGNER</h3>
              </div>
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__card-content">
              <p>
                The card quality is amazing. Thick and feels good in your hand.
                The cards come very quickly after ordering and the design
                process is very easy to use.
              </p>
            </div>
            <div className="reviews__card-author">
              <div className="reviews__card-author-dp">
                <img src={avatar2} alt="" />
              </div>
              <div className="reviews__card-author-text">
                
              <h1 className="reviews__card-author-name">MARY JANE</h1>
              <h3 className="reviews__card-author-title">NEWS REPORTER</h3>
              </div>
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__card-content">
              <p>
                I used Tapi to create my business cards. It was easy,
                straightforward, and the cards turned out great!
              </p>
            </div>
            <div className="reviews__card-author">
              <div className="reviews__card-author-dp">
                <img src={avatar3} alt="" />
              </div>
              <div className="reviews__card-author-text">

              <h1 className="reviews__card-author-name">GWEN STACY</h1>
              <h3 className="reviews__card-author-title">STUDENT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
