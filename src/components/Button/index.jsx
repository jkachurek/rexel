import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  text,
  children,
  onClick,
  disabled,
  color,
  type,
  width,
}) => (
  <button
    className={`button btn-${color}`}
    onClick={onClick}
    disabled={disabled}
    type={type}
    style={{ width }}
  >
    {text ? text : children}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  width: '100%',
};

export default Button;
