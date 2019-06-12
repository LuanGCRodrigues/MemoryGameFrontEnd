import React, { createContext, useContext, useReducer } from "react";

export const GameContext = createContext();

export const GameProvider = ({ reducer, initialState, children }) => (
  <GameContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GameContext.Provider>
);

export const useGameValue = () => useContext(GameContext);
