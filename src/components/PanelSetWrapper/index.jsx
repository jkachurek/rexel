import React from 'react';
import PropTypes from 'prop-types';

import './PanelSetWrapper.scss';

const PanelSetWrapper = ({ children }) => (
  <div className="panel-set-wrapper">
    {children}
  </div>
);

PanelSetWrapper.propTypes = {
  children: PropTypes.node,
};

export default PanelSetWrapper;
