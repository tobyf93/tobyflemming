import React, { Component, PropTypes } from 'react';

class Grid extends Component {
  constructor() {
    super();
    this.divs = [];
  }

  componentDidUpdate() {
    for (let i = 0; i < this.divs.length; i += 1) {
      const div = this.divs[i];
      div.style.height = `${div.offsetWidth}px`;
    }
  }

  getGrid() {
    const grid = [];
    const chunkSize = 3;
    const baseStyle = {
      flex: 1,
      border: '5px solid black',
      margin: '10px',
    };

    for (let i = 0; i < this.props.images.length; i += chunkSize) {
      const imageHolders = this.props.images.slice(i, i + chunkSize).map((image, j) => {
        const style = {
          ...baseStyle,
          backgroundImage: `url('${image.url}')`,
        };
        const key = this.props.images.indexOf(image);

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

      while (imageHolders.length !== chunkSize) {
        imageHolders.push(<div key={-imageHolders.length} style={baseStyle} />);
      }

      grid.push(
        <div key={i} style={{ display: 'flex' }}>
          {imageHolders}
        </div>);
    }

    return grid;
  }

  render() {
    return (
      <div>
        {this.getGrid()}
      </div>
    );
  }
}

Grid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showGallery: PropTypes.func.isRequired,
};

export default Grid;
