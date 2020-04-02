import React, {Component} from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import VideoPage from './VideoPage/VideoPage';

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
        <Route path="/register" exact component={UserForm} />
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} podatki={this.state.courses} />}
        />
        <Route path="/video" exact component = {VideoPage} />
      </div>
    );
  }
}

export default App;
