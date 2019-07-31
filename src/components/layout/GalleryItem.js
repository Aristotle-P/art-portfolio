import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ imageUrl }) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="Not sure" />
    </div>
  );
};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default GalleryItem;
