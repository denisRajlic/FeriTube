<<<<<<< HEAD
import "./App.css";
import UserForm from "./loginComponents/UserForm";
import Navigation from "./Navigation/Navigation";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import React, { Component } from "react";
=======
import React from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Video from './Video/Video';
>>>>>>> 24b5edb352b18fbc6ea5f0aeb8cd11a22bc2c1da

class App extends Component {
  state = {
    courses: [ //tetstni podatki
      {
        name: "Python",
        opis: "",
        dolzina: 5
      },
      {
        name: "Assembler",
        opis: "",
        dolzina: 5
      },
      {
        name: "Fittnes",
        opis: "",
        dolzina: 5
      }
    ]
  };

<<<<<<< HEAD
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/register" exact component={UserForm} />
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} podatki={this.state.courses} />}
        />
        <Route path="/video" exact component = {Video} />
      </div>
    );
  }
=======
function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/register" exact component = {UserForm} />
      <Route path="/" exact component = {HomePage} />
      <Route path="/video" exact component = {Video} />
    </div>
  );
>>>>>>> 24b5edb352b18fbc6ea5f0aeb8cd11a22bc2c1da
}

export default App;
