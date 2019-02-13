import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';
import ICONS from './icons';

const Icon = ({
  icon,
  title,
  onClick,
  hasNotification,
  className,
}) => {
  const classNames = [
    'icon',
    `ic-${icon}`,
    className,
    hasNotification && 'notification'
  ].filter(Boolean)
    .join(' ');

  return (
    <span
      className={classNames}
      title={title || icon}
      style={{
        cursor: onClick ? 'pointer' : 'normal'
      }}
    />
  );
}

Icon.propTypes = {
  icon: PropTypes.oneOf(ICONS),
  title: PropTypes.string,
  onClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  className: PropTypes.string,
};

export default Icon;
