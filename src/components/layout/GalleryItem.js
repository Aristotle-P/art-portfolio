import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ imageUrl }) => {
  const styles = {
    height: '33%',
    width: '100%'
  };

  const divStyle = {
    alignItems: 'center'
  };

  return (
    <div style={divStyle}>
      <a href="#">
        <img
          src={`${process.env.PUBLIC_URL}${imageUrl}`}
          alt="Not sure"
          style={styles}
        />
      </a>
    </div>
  );
};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default GalleryItem;
