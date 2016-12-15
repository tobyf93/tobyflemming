import React, { Component } from 'react';

export default class Grid extends Component {
  render() {
    return (
      <div>
        {
          this.props.images.map((image, i) => (
            <img
              key={i}
              role="presentation"
              src={image.url}
              onClick={() => this.props.showGallery(i)}
            />
          ))
        }
      </div>
    );
  }
}
