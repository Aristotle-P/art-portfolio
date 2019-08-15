import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ imageUrl }) => {
  const styles = {
    height: '100px',
    width: '150px'
  };

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}${imageUrl}`}
        alt="Not sure"
        style={styles}
      />
    </div>
  );
};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default GalleryItem;
