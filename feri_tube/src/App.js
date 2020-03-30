import React from 'react';
import './App.css';
import UserForm from './loginComponents/UserForm';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <UserForm />
    </div>
  );
}

export default App;
