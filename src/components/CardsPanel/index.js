import React from "react";

import Card from './card';

import "./cardsPanel.scss";

export const CardsPanel = ({ items }) => (
  <div className="cards-panel">
    {items &&
      items.length &&
      items.map((item, index) => (
        <Card key={index} />
      ))}
  </div>
);
