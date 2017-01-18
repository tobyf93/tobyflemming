import React, { Component } from 'react';

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-button-wrapper">
          <i
            className="menu-button fa fa-bars"
            aria-hidden="true"
            onClick={() => this.setState({ open: !this.state.open })}
          />
        </div>
        <div className={`menu-panel ${this.state.open ? 'menu-open' : ''}`} style={{ flex: 1 }}>
          <ul>
            <li>home</li>
            <li>buy prints</li>
            <li>sessions</li>
          </ul>
          <a
            href="https://www.instagram.com/toby_phlegm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="instagram fa fa-instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default SideMenu;
