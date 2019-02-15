import React from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.scss';

const Thumbnail = ({
  src,
  label,
}) => (
  <div className="thumbnail">
    <img
      className="thumbnail-img"
      src={src}
      alt={label}
    />
    <p className="thumbnail-text">
      {label}
    </p>
  </div>
);

export default Thumbnail;
