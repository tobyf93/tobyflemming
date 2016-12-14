import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';
import Image from './Image';

class Main extends Component {
  componentDidMount() {
    // this.gallery.show();
  }

  render() {
    return (
      <div>
        <Gallery ref={(ref) => { this.gallery = ref; }} />
        <Image />
      </div>
    );
  }
}

export default connect(state => state)(Main);
