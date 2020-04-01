import React from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Video from './Video/Video';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/register" exact component = {UserForm} />
      <Route path="/" exact component = {HomePage} />
      <Route path="/video" exact component = {Video} />
    </div>
  );
}

export default App;
