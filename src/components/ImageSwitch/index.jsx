import React from 'react';
import PropTypes from 'prop-types';

const ImageSwitch = ({
  mobileImg,
  nonmobileImg,
  alt,
  className,
  ...props,
}) => (
  <React.Fragment>
    <img
      src={mobileImg}
      className={`mobile-only ${className}`}
      alt={alt}
      {...props}
    />
    <img
      src={nonmobileImg}
      className={`nonmobile-only ${className}`}
      alt={alt}
      {...props}
    />
  </React.Fragment>
);

ImageSwitch.propTypes = {
  mobileImg: PropTypes.string,
  nonmobileImg: PropTypes.string,
}

export default ImageSwitch;
