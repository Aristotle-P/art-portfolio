import React from 'react';
import GalleryItem from './GalleryItem';

const urls = ['/images/coding.png'];

const Gallery = () => {
  return (
    <div>
      <GalleryItem imageUrl={urls[0]} />
    </div>
  );
};

export default Gallery;
