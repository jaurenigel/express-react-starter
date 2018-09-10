import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Developers from './components/developers/developers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Express-React-Starter</h1>
        </header>
        <Developers />
      </div>
    );
  }
}

export default App;
