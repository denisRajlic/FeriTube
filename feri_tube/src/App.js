import React, {Component} from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Video from './Video/Video';
import { Container } from '@material-ui/core';

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

  render() {
    return (
      <div className="App">
        <Navigation />
        <Container>
        <Route path="/register" exact component={UserForm} />
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} podatki={this.state.courses} />}
        />
        <Route path="/video" exact component = {Video} />
        </Container>
      </div>
    );
  }
}

export default App;
