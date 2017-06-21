import React, { Component } from "react";
import "./App.css";
import MainHeader from './MainHeader'
import Complexes from './Complexes/List'
import Complex from './Complexes/Show'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <Complexes />
        <Complex />
        <Footer />
      </div>
    );
  }
}

export default App;
