import React from "react";

import { Header } from "./Header";
import Main from "./Main";

import "./home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Main />
    </div>
  );
}
