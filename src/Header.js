import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="navigation-container">
          <div className="svg-div">
            <svg className="svg" viewBox='30 0 100 100'>
              <polygon points='76.155,47 58.155,47 69.163,20.856 45.078,20.856 32.845,62 50.029,62 40, 100'/>
            </svg>
          </div>
          <nav className="menu">
            <ul className="menu-items">
              <li><a href="#">GALLERY</a></li>
              <li><a href="#">ABOUT</a></li>
            </ul>
          </nav>
        </header>
        <div className="gallery-name">
          <h1>TROPANG KIDLAT</h1>
        </div>
      </div>
    )
  }
}