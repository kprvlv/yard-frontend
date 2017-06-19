import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MainHeader from './MainHeader'
import Footer from './Footer'
import MainLogo from './MainLogo'
import Description from './Description'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <MainLogo />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default App;
