import React from 'react';
import PropTypes from 'prop-types';

import './BadgeButton.scss';

import BadgeIcon from '../BadgeIcon';
import ICONS from '../Icon/icons';

const circlePadding = 40;

const BadgeButton = ({
  icon,
  text,
  route,
  radius,
}) => (
  <div className="badge-wrapper">
    <div className="action-circle"
      style={{
        height: `${radius + circlePadding}px`,
        width: `${radius + circlePadding}px`,
        borderRadius: `${(radius + circlePadding) / 2}px`,
      }}
    >
      <BadgeIcon icon={icon} radius={radius} />
    </div>
    <p className="badge-text">
      {text}
    </p>
  </div>
);

BadgeButton.propTypes = {
  icon: PropTypes.oneOf(ICONS),
  text: PropTypes.string,
  route: PropTypes.string,
  radius: PropTypes.number,
};

export default BadgeButton;
