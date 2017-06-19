import React, { Component } from "react";
import DevelopmentLogo from "./compass-development-logo.svg";
import "./App.css";

import MainLogo from './MainLogo'
import Description from './Description'
import Cards from './Cards'

export default () => {
  return (
    <div>
      <MainLogo />
      <Description />
      <Cards />
    </div>
  );
};
