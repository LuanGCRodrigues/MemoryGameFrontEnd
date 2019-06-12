import React, { useEffect } from "react";

import { GameProvider } from "../../providers/GameProvider";
import { useStateValue } from "../../providers/StateProvider";
import { withRouter } from "react-router-dom";

import CardsPanel from "../../components/CardsPanel";
import { Items } from "./gameItems";

function Main(props) {
  const [{ user }] = useStateValue();
  useEffect(() => {
    if (!user || !user.sessionKey) {
      props.history.push("/");
    }
  }, [props.history, user]);

  const makeInitialState = () => {
    let items = Items();

    items.map((item, index) => {
      item["cardTurned"] = false;
      item["founded"] = false;
    });

    return items;
  };

  const initialState = {
    gameItems: makeInitialState(),
    turnsCount: 0,
    turnController: 0,
    pairControl: 0
  };

  const cardsReducer = (state, action) => {
    switch (action.type) {
      case "turnCard":
        let { turnsCount, turnController, pairControl } = state;
        let gameItems = state.gameItems;

        turnController++;
        if (turnController === 2) {
          turnsCount++;
          turnController = 0;

          gameItems.map((item, index) => {
            if (
              !item.founded &&
              index !== action.index &&
              item.id === action.newItem.id &&
              item.cardTurned === action.newItem.cardTurned &&
              item.cardTurned
            ) {
              item.founded = true;
              action.newItem.founded = true;
              pairControl++;
            }
          });

          gameItems.map((item, index) => {
            item.cardTurned = false;
          });

          action.newItem.cardTurned = false;
        } else {
          gameItems[action.index] = action.newItem;
        }

        return { ...state, turnsCount, turnController, pairControl, gameItems };
      default:
        return state;
    }
  };

  return (
    <main className="main-container">
      <div className="game-container">
        <GameProvider initialState={initialState} reducer={cardsReducer}>
          <CardsPanel />
        </GameProvider>
      </div>
    </main>
  );
}

export default withRouter(Main);
