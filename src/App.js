import React, { Component } from 'react';
import Header from './Header.js';
import Gallery from './Gallery.js';
import './App.css';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Gallery />
        </main>
        <footer>

          <strong>footer</strong>
        </footer>
      </div>
    );
  }
}

export default App;
