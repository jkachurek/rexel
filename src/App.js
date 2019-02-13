import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import NavMenu from './components/NavMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-contents">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default App;
