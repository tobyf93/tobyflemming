import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from './Gallery';
import Grid from './Grid';
import * as actions from '../redux/actions';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <div>
        <Gallery
          ref={(ref) => { this.gallery = ref; }}
          images={this.props.images}
        />
        <Grid
          images={this.props.images}
          showGallery={i => this.gallery.show(i)}
        />
      </div>
    );
  }
}

Feed.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchFeed: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(state => state, mapDispatchToProps)(Feed);
