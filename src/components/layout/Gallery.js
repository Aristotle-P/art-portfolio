import React from 'react';
import GalleryItem from './GalleryItem';
import urls from '../../utils/imgHelper';

const images = urls.map((img, index) => {
  return <GalleryItem imageUrl={img} key={index} />;
});

const Gallery = () => {
  return <div>{images}</div>;
};

export default Gallery;
