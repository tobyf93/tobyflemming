import React, { Component } from 'react';
import { connect } from 'react-redux';
import photoswipe from 'photoswipe';

class Main extends Component {
  componentDidMount() {
    console.log(photoswipe);
  }

  render() {
    console.log(photoswipe);
    return (
      <div>
        something new!!!!
      </div>
    );
  }
}

export default connect((state) => state)(Main);
