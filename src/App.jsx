import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';
import Footer from './Footer';
import './App.css';

export default () =>
  (<Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route path="/complex" component={Complex} />
      <Footer />
    </div>
  </Router>);
