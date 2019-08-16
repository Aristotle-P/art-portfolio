import React from 'react';
import GalleryItem from './GalleryItem';
import '../../styles/layout/Gallery.css';
import urls from '../../utils/imgHelper';

const images = urls.map((img, index) => {
  return <GalleryItem imageUrl={img} key={index} />;
});

const Gallery = () => {
  return <div className="gallery-container">{images}</div>;
};

export default Gallery;
