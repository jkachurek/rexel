import React from 'react';
import PropTypes from 'prop-types';

import './Panel.scss';

const Panel = ({
  size,
  children,
  className,
  style,
  onClick,
}) => (
  <div
    className={`panel panel-${size} ${className || ''}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>
);

Panel.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Panel.defaultProps = {
  size: 'small',
};

export default Panel;
