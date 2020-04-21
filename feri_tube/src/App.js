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
import Contact from './Contact/Contact';
import About from './About/About';

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
    
    ],
    current: [{
      name: "Assembler",
      opis: "",
      dolzina: 5
    }]
  };

  currentSetter(item) {
    this.setState(this.current = [{
      name: item.name,
      opis: item.opis,
      dolzina: item.dolzina
    }])
    console.log(item);
    
  }



  render() {
    return (
      <div className="App">
        <Navigation />
        <Container>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/register" exact component={UserForm} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} podatki={this.state.courses} setter={this.currentSetter.bind(this)}/>}
        />
        <Route path="/video" exact component = {VideoPage} />
        <Route path="/upload" exact component = {Upload} />
        </Container>
      </div>
    );
  }
}

export default App;
