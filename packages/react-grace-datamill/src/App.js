import React, { Component } from 'react';
import { BDBanner } from 'react-grace-2';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <BDBanner background='red'>
            数坊定制化
          </BDBanner>
        </div>
      </div>
    );
  }
}

export default App;
