import React from 'react';
import PropTypes from 'prop-types';

import './ThumbnailGallery.scss';

import Thumbnail from '../Thumbnail';

const ThumbnailGallery = ({ title, thumbnails }) => (
  <div className="thumbnail-gallery">
    <h3 className="thumbnail-gallery-title">{title}</h3>
    <div className="thumbnails">
      {thumbnails.map((t, i) => (
        <Thumbnail key={i} {...t} />
      ))}
    </div>
  </div>
);

export default ThumbnailGallery;
