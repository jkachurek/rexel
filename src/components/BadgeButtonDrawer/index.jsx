import React from 'react';
import PropTypes from 'prop-types';

import './BadgeButtonDrawer.scss';

import BadgeButton from '../BadgeButton';

const BadgeButtonDrawer = ({ badgeButtons }) => (
  <div className="badge-button-drawer">
    {badgeButtons.map((bb, i) => (
      <BadgeButton key={i} {...bb} radius={40} />
    ))}
  </div>
);

BadgeButtonDrawer.propTypes = {
  badgeButtons: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
    route: PropTypes.string,
  })),
};

BadgeButtonDrawer.defaultProps = {
  badgeButtons: [],
};

export default BadgeButtonDrawer;
