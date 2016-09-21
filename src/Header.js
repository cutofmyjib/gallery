import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="navigation-container">
          <div className="svg-div">
            <svg className="svg" viewBox='0 0 100 100'>
              <polygon points='76.155,41.825 58.155,41.825 69.163,20.856 42.078,20.856 29.845,55.805 47.029,55.805 38.583,81.145 '/>
            </svg>
          </div>
          <nav className="menu">
            <ul className="menu-items">
              <li><a href="#">GALLERY</a></li>
              <li><a href="#">ABOUT</a></li>
            </ul>
          </nav>
      </header>
    )
  }
}