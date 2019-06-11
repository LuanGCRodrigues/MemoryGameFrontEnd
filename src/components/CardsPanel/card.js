import React, { useState } from "react";

import "./card.scss";

import CardImages from "./cardImageImporter";

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`card-item-container ${flipped && "flipped"}`}
      onClick={flip}
    >
      <div className="flip-card">
        <div className="card-item-wrapper wrapper-back-face">
          <div className="card-back-face" />
        </div>
        <div className="card-item-wrapper wrapper-front-face">
          <div className="card-front-face">
            <img src={CardImages.LogoCSharp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
