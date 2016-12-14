import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from './Gallery';
import Image from './Image';
import * as actions from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    // this.gallery.show();
    this.props.fetchFeed();
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

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(state => state, mapDispatchToProps)(Main);
