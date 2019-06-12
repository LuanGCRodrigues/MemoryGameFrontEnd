import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { StateProvider } from "./providers/StateProvider";

import Login from "./views/Login";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

export default function App() {
  const initialState = {
    user: {}
  };

  const sessionReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.newUser };
      case "logout":
        return { ...state, user: {} };
      default:
        return state;
    }
  };

  return (
    <Router>
      <StateProvider initialState={initialState} reducer={sessionReducer}>
        <div className="basic-container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </StateProvider>
    </Router>
  );
}
