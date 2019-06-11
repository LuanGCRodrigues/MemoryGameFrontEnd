import React from "react";

import { CardsPanel } from "../../components/CardsPanel";

export default function Main() {
  return (
    <main className="main-container">
      <div className="game-container">
        <CardsPanel
          items={[
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1",
            "abc",
            "abc1"
          ]}
        />
      </div>
    </main>
  );
}
