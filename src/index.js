import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles/default.scss";

import Login from "./views/Login";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

ReactDOM.render(
  <Router>
    <div className="basic-container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
