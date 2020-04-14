import React, {Component} from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import VideoPage from './VideoPage/VideoPage';
import Login from './Login/Login';
import Container from '@material-ui/core/Container';
import Upload from './Upload/Upload';

class App extends Component {
  state = {
    courses: [ //testni podatki
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
      },
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
      },
      {
        name: "Python",
        opis: "",
        dolzina: 5
      },
      {
        name: "Assembler",
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
        <Route path="/login" exact component={Login} />
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} podatki={this.state.courses} />}
        />
        <Route path="/video" exact component = {VideoPage} />
        <Route path="/upload" exact component = {Upload} />
        </Container>
      </div>
    );
  }
}

export default App;
