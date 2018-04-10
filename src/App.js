import React, { Component } from 'react';
import logo from './dog.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bit Puppies!</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Welcome to Bit Puppies - Where everything is a little bit of puppy!
        </p>
      </div>
    );
  }
}

export default App;
