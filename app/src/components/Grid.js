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
    const baseStyle = {
      flex: 1,
      border: '5px solid black',
      margin: '10px',
    };

    return (
      <div>
        {
          chunkArray(this.props.images, chunkSize).map((chunk, i) => {
            const images = chunk.map((image, j) => {
              const style = {
                ...baseStyle,
                backgroundImage: `url('${image.url}')`,
              };
              const key = this.props.images.indexOf(image);

              // Reference the first item of every chunk
              if (j === 0) {
                return (
                  <div
                    key={key}
                    ref={(ref) => { this.divs.push(ref); }}
                    style={style}
                  />
                );
              }

              return <div key={key} style={style} />;
            });

            // Ensure incomplete chunks have placeholders
            while (images.length !== chunkSize) {
              images.push(<div key={-images.length} style={baseStyle} />);
            }

            return (
              <div key={i} style={{ display: 'flex' }}>
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
