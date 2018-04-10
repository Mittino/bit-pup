import React, { Component } from 'react';
import logo from './dog.svg';
import TextBox from './components/textbox.js'
import GreenButton from './components/green-button.js'
import PurpleButton from './components/purple-button.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Tendril Puppies!</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p className="App-intro">
          <br/>
            Welcome to Bit Puppies - Where everything is a little bit of puppy!
          </p>
          <TextBox/>
          <br/>
          <br/>
          <PurpleButton/>
          <GreenButton/>
          <div>

          </div>
        </div>
    );
  }
}

export default App;
