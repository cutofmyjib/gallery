import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <h1 className="section-name">Gallery</h1>
        <ul className="gallery">
          <li>
            <div className="gallery-img-div">
              <div><img className="gallery-img" src="http://media.gettyimages.com/photos/double-exposure-portrait-of-a-young-man-and-a-tree-picture-id562609891?s=170667a" /></div>
              <p>caption 1</p>
              <p>caption 2</p>
            </div>
          </li>
          <li>
            <div className="gallery-img-div">
              <div><img className="gallery-img" src="http://media.gettyimages.com/photos/girl-covering-her-mouth-picture-id142005745?s=170667a" /></div>
              <p>caption 1</p>
              <p>caption 2</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}