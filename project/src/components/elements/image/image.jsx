import React from 'react';
import PropTypes from 'prop-types';

function Image({url}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={url} alt="Photo studio" />
    </div>
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
