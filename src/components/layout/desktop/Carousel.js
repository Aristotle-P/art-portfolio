import React from 'react';
import CarouselNav from './CarouselNav';
import Slides from './Slides';

const Carousel = () => {
  return (
    <div>
      <CarouselNav />
      <Slides />
      <CarouselNav />
    </div>
  );
};

export default Carousel;
