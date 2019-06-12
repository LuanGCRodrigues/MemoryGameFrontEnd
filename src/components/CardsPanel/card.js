import React, { useState, useEffect } from "react";

import { useGameValue } from "../../providers/GameProvider";

import "./card.scss";

export default function Card(props) {
  const { item, index } = props;
  const [flipped, setFlipped] = useState(false);

  const [{ gameItems }, dispatch] = useGameValue();
  useEffect(() => {
    if (flipped && !item.cardTurned) {
      setTimeout(function() {
        setFlipped(false);
      }, 900);
    }
  }, [flipped, item.cardTurned]);

  const flip = () => {
    setFlipped(true);
    item.cardTurned = true;

    dispatch({
      type: "turnCard",
      newItem: item,
      index
    });
  };

  return (
    <div
      className={`card-item-container ${(flipped || item.founded) &&
        "flipped"}`}
      onClick={flip}
    >
      <div className="flip-card">
        <div className="card-item-wrapper wrapper-back-face">
          <div className="card-back-face" />
        </div>
        <div className="card-item-wrapper wrapper-front-face">
          <div className="card-front-face">
            <img src={item.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
