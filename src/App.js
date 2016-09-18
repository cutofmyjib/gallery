import React, { Component } from 'react';
import './App.css';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="navigation-container">
          <nav className="menu">
            <ul className="menu-items">
              <li>gallery</li>
              <li>about</li>
            </ul>
          </nav>
        </header>
        <div className="content">

        </div>
      </div>
    );
  }
}

export default App;
