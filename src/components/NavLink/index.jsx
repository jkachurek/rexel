import React from 'react';
import PropTypes from 'prop-types';

import './NavLink.scss';

import Icon from '../Icon';
import ICONS from '../Icon/icons';

const fakeNavigation = route =>
  console.log(`If this were real, you might route to the ${route} page`);

const NavLink = ({
  text,
  icon,
  route,
  jumbo,
}) => (
  <span
    className={`nav-link${jumbo ? ' jumbo' : ''}`}
    onClick={() => fakeNavigation(route)}
  >
    <span className="nav-link-title">
      <Icon icon={icon} />
      <span className="nav-link-text">{text}</span>
    </span>
    <span className="nav-link-right">
      <Icon icon="arrow-forward" className="mobile-only" />
    </span>
  </span>
);

NavLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOf(ICONS),
  route: PropTypes.string,
  jumbo: PropTypes.bool,
};

export default NavLink;
