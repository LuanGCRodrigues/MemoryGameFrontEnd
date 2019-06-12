import React, { useEffect } from "react";

import { useGameValue } from "../../providers/GameProvider";
import { useStateValue } from "../../providers/StateProvider";
import API from '../../services/api';

import Card from "./card";
import { Modal } from "antd";

import "./cardsPanel.scss";

export default function CardsPanel() {
  const [{ user }] = useStateValue();
  const [{ gameItems, pairControl, turnsCount }] = useGameValue();
  useEffect(() => {

    if (pairControl === 10) {
      Modal.success({
        title: "Congratulations, you are the best!",
        content: `Do you play for ${turnsCount} times!`,
        onOk: () => {
          console.log(user);
          debugger;
        }
      });
    }
  }, [pairControl, turnsCount, user]);

  return (
    <div className="cards-panel">
      {gameItems &&
        gameItems.length &&
        gameItems.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
    </div>
  );
}
