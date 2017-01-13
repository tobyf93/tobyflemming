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
      <div className={`menu-wrapper ${this.state.open ? 'menu-open' : ''}`}>
        <div>
          <i
            className="menu-button fa fa-bars"
            aria-hidden="true"
            onClick={() => this.setState({ open: !this.state.open })}
          />
        </div>
        <div className="menuPanel" style={{ flex: 1 }}>
          <ul>
            <li>coming soon</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
