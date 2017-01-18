import React, { PropTypes } from 'react';
import SideMenu from './SideMenu';

const Main = ({ children }) =>
  <div className="page-wrapper">
    <div className="content-wrapper">
      <div className="header">
        <span className="desktop">Toby Flemming</span>
        <span className="mobile">TF</span>
      </div>
      {children}
    </div>
    <div style={{ width: '60px' }} />
    <SideMenu />
  </div>;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
