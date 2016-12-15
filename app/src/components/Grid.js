import React, { Component, PropTypes } from 'react';

// {
//   images.map((image, i) => (
//     <button onClick={() => showGallery(i)}>
//       <img
//         key={i}
//         role="presentation"
//         src={image.url}
//       />
//     </button>
//   ))
// }

class Grid extends Component {
  componentDidMount() {
    this.div.style.height = `${this.div.offsetWidth}px`;
  }

  render() {
    const style = {
      flex: 1,
      border: '1px solid black',
      margin: '10px',
    };

    return (
      <div style={{ display: 'flex' }}>
        <div ref={(ref) => { this.div = ref; }} style={style} />
        <div style={style} />
        <div style={style} />
      </div>
    );
  }
}

Grid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showGallery: PropTypes.func.isRequired,
};

export default Grid;
