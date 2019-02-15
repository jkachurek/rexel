import React from 'react';
import PropTypes from 'prop-types';

import './BadgeIcon.scss';

import Icon from '../Icon';
import ICONS from '../Icon/icons';

const BadgeIcon = ({ icon, radius }) => (
  <div
    className="badge-icon"
    style={{
      height: `${radius}px`,
      width: `${radius}px`,
    }}
  >
    <Icon icon={icon} size={radius} />
  </div>
);

BadgeIcon.propTypes = {
  icon: PropTypes.oneOf(ICONS),
  radius: PropTypes.number,
};

export default BadgeIcon;
