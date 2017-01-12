import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from './Gallery';
import Grid from './Grid';
import * as actions from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <div>
        <div className="pageWrapper">
          <div className="header">Toby Flemming</div>
          <Gallery
            ref={(ref) => { this.gallery = ref; }}
            images={this.props.images}
          />
          <Grid
            images={this.props.images}
            showGallery={i => this.gallery.show(i)}
          />
        </div>
        <div className="menu">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchFeed: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(state => state, mapDispatchToProps)(Main);
