import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from './Gallery';
import Grid from './Grid';
import SideMenu from './SideMenu';
import * as actions from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="content-wrapper">
          <div className="header">
            <span className="desktop">Toby Flemming</span>
            <span className="mobile">TF</span>
          </div>
          <Gallery
            ref={(ref) => { this.gallery = ref; }}
            images={this.props.images}
          />
          <Grid
            images={this.props.images}
            showGallery={i => this.gallery.show(i)}
          />
        </div>
        <div style={{ width: '60px' }} />
        <SideMenu />
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
