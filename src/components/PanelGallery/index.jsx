import React from 'react';
import PropTypes from 'prop-types';

import './PanelGallery.scss';

const PanelGallery = ({ children }) => (
  <div className="panel-gallery">
    {children}
  </div>
);

PanelGallery.propTypes = {
  children: PropTypes.node,
};

export default PanelGallery;
