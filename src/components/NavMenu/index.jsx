import React from 'react';
// import PropTypes from 'prop-types';

import './NavMenu.scss';

import NavLink from '../NavLink';

const NavMenu = props => (
  <div className="nav-menu">
    <NavLink jumbo
      text="Shop all categories"
      icon="categories"
      route="shopAll"
    />
    <NavLink
      text="My Catalog"
      icon="add-check"
      route="catalog"
    />
    <NavLink
      text="My List"
      icon="list"
      route="shopAll"
    />
    <NavLink
      text="Live Help"
      icon="comment"
      route="shopAll"
    />
    <NavLink
      text="PIM"
      icon="check-circle"
      route="shopAll"
    />
    <NavLink
      text="Account"
      icon="person-black"
      route="shopAll"
    />
    <NavLink
      text="Branch Locations"
      icon="place"
      route="shopAll"
    />
  </div>
);

export default NavMenu;
