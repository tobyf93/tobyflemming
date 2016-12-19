import React, { Component, PropTypes } from 'react';
import chunkArray from 'lodash/chunk';

class Grid extends Component {
  constructor() {
    super();
    this.divs = [];
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeights.bind(this));
  }

  componentDidUpdate() {
    this.updateHeights();
  }

  updateHeights() {
    for (let i = 0; i < this.divs.length; i += 1) {
      const div = this.divs[i];
      div.style.height = `${div.offsetWidth}px`;
    }
  }

  render() {
    const chunkSize = 3;

    return (
      <div>
        {
          chunkArray(this.props.images, chunkSize).map((chunk, i) => {
            const images = chunk.map((image, j) => {
              const key = this.props.images.indexOf(image);
              const props = {
                key,
                className: 'image',
                style: { backgroundImage: `url('${image.url}')` },
                onClick: () => this.props.showGallery(key),
              };

              // Reference the first item of every chunk
              if (j === 0) {
                return (
                  <div
                    {...props}
                    ref={(ref) => { this.divs.push(ref); }}
                  />
                );
              }

              return <div {...props} />;
            });

            // Ensure incomplete chunks have placeholders
            while (images.length !== chunkSize) {
              images.push(<div key={-images.length} className="placeholder" />);
            }

            return (
              <div key={i} className="image-row">
                {images}
              </div>
            );
          })
        }
      </div>
    );
  }
}

Grid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showGallery: PropTypes.func.isRequired,
};

export default Grid;
