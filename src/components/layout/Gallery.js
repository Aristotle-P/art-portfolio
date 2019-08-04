import React from 'react';
import GalleryItem from './GalleryItem';
import urls from '../../utils/imgHelper';

const images = urls.map(img => {
  return <GalleryItem imageUrl={img} />;
});

const Gallery = () => {
  return <div>{images}</div>;
};

export default Gallery;
