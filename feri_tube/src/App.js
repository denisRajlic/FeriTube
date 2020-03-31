import React from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/register" exact component = {UserForm} />
      <Route path="/" exact component = {HomePage} />
    </div>
  );
}

export default App;
