import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <h1 className="section-name">Gallery</h1>
          <ul className="gallery">
            <li>
              <div>
                <img className="gallery-img" src="http://media.gettyimages.com/photos/double-exposure-portrait-of-a-young-man-and-a-tree-picture-id562609891?s=170667a" />
                <p>caption</p>
              </div>
            </li>
            <li>
              <div>
                <img className="gallery-img" src="http://media.gettyimages.com/photos/girl-covering-her-mouth-picture-id142005745?s=170667a" />
                <p>caption</p>
              </div>
            </li>
          </ul>

        </main>
        <footer>

          <strong>footer</strong>
        </footer>
      </div>
    );
  }
}

export default App;
