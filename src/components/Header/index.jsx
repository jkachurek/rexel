import React from 'react';
// import PropTypes from 'prop-types';

import './Header.scss';

import logo from './logo.png';
import Icon from '../Icon';
import SearchBox from '../SearchBox';

const Header = () => (
  <div className="app-header">
    <div className="header-contents">
      <div className="header-flex-line">
        <img
          className="header-logo"
          src={logo}
          alt="Platt Electric"
        />
        <span className="header-icons">
          <Icon title="Search" icon="search-white" onClick={() => {}} />
          <Icon title="Cart" icon="shopping-cart" onClick={() => {}} />
          <Icon title="Profile" icon="person-white" onClick={() => {}} hasNotification/>
          <Icon title="Menu" icon="menu" onClick={() => {}} />
        </span>
      </div>
      <SearchBox />
    </div>
  </div>
);

export default Header;
