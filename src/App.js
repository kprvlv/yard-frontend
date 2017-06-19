import React, { Component } from "react";
<<<<<<< HEAD
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import Complexes from './Complexes/List'
import Complex from './Complexes/Show'
import Footer from './Footer'

=======
import logo from "./logo.svg";
import "./App.css";

import MainHeader from './MainHeader'
import Footer from './Footer'
import MainLogo from './MainLogo'
import Description from './Description'
>>>>>>> complexes-page without routing and cards-block

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route path="/complex" component={Complex} />
          <Footer />
        </div>
      </Router>
=======
      <div className="App">
        <MainHeader />
        <MainLogo />
        <Description />
        <Footer />
      </div>
>>>>>>> complexes-page without routing and cards-block
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> complexes-page without routing and cards-block
export default App;
