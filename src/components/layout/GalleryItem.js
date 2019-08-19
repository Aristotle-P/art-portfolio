import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/layout/GalleryItem.css';

const GalleryItem = ({ imageUrl, link, linkTitle }) => {
  const [myTitle] = useState(linkTitle);

  return (
    <div className="gallery-item-container">
      <Link
        to={{
          pathname: `/${link}`,
          state: { myTitle }
        }}
        className="gallery-link"
      >
        <img
          src={`${process.env.PUBLIC_URL}${imageUrl}`}
          alt="Not sure"
          className="image"
        />
        <h3 className="gallery-text">{linkTitle}</h3>
      </Link>
    </div>
  );
};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkTitle: PropTypes.string,
  link: PropTypes.string
};

GalleryItem.defaultProps = {
  link: '',
  linkTitle: ''
};

export default GalleryItem;
