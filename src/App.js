import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MainHeader from './MainHeader'
import Complexes from './Complexes/List'
import Complex from './Complexes/Show'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainHeader />
          <Route exact path="/" component={Complexes} />
          <Route path="/show" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
