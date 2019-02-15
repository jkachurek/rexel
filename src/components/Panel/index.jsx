import React from 'react';
import PropTypes from 'prop-types';

import './Panel.scss';

const Panel = ({ size, children, className }) => (
  <div className={`panel panel-${size} ${className || ''}`}>
    {children}
  </div>
);

export default Panel;
