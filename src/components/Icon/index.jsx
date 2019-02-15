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
  size,
}) => {
  const classNames = [
    'icon',
    `ic-${icon}`,
    className,
    hasNotification && 'notification'
  ].filter(Boolean).join(' ');

  return (
    <span
      className={classNames}
      style={{
        cursor: onClick ? 'pointer' : 'normal',
        height: `${size}px`,
        width: `${size}px`,
        backgroundSize: `${size - 8}px`,
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
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 30,
};

export default Icon;
