import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import '../../styles/layout/Gallery.css';
import imgUrls from '../../utils/imgHelper';

const Gallery = ({ links, linkTitles }) => {
  const images = imgUrls.map((img, index) => {
    return (
      <GalleryItem
        imageUrl={img}
        key={index}
        link={links[index]}
        linkTitle={linkTitles[index]}
      />
    );
  });
  return <div className="gallery-container">{images}</div>;
};

Gallery.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  linkTitles: PropTypes.arrayOf(PropTypes.string)
};

Gallery.defaultProps = {
  links: [''],
  linkTitles: ['']
};

export default Gallery;
