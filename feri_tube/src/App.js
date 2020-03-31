import React from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';
import {Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/register" exact component = {UserForm} />
    </div>
  );
}

export default App;
