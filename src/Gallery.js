import React, { Component } from 'react';
import creds from './creds.js';


export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  buildPhotoUrl(photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
    '/' + photo.id + '_' + photo.secret + '.jpg';
  }

  componentDidMount() {
    var base = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=";
    var extra = "&tags=black+and+white&safe_search=true&is_getty=true&format=json&nojsoncallback=1"
    console.log("hello")
    fetch(base+creds.apikey+extra)
      .then((response) => response.json())
      .then((response) => {
        var firstTen = response.photos.photo.slice(0, 10);
        var imageUrls = firstTen.map(photo => this.buildPhotoUrl(photo))
        this.setState({ photos: imageUrls })
        console.log(this.state.photos)
      })
  }

  render() {
    if (this.state.photos) {
      var list = this.state.photos.map(function(photo, index) {
        return <img src={photo} />
      })
    }

    return (
      <div>
        <h1 className="section-name">Gallery</h1>
        <ul className="gallery">
          {list}
        </ul>
      </div>
    )
  }
}