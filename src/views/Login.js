import React, { useState } from "react";

import { Card } from "antd";
import SignInForm from "./Login/SignIn/index";
import SignUpForm from "./Login/SignUp";

import "../styles/login.scss";

export default function Login() {
  const [tabKey, setTabKey] = useState("signin");

  const tabList = [
    {
      key: "signin",
      tab: "Sign in"
    },
    {
      key: "signup",
      tab: "Sign up"
    }
  ];

  const tabListContent = {
    signin: <SignInForm />,
    signup: <SignUpForm />
  };

  const onTabChange = key => {
    setTabKey(key);
  };

  return (
    <div className="row-padding-centralized-container">
      <div className="login-container">
        <div className="game-title">
          <span>Memory Game</span>
        </div>
        <Card
          style={{ width: "100%" }}
          tabList={tabList}
          activeTabKey={tabKey}
          onTabChange={key => {
            onTabChange(key);
          }}
        >
          {tabListContent[tabKey]}
        </Card>
      </div>
    </div>
  );
}
