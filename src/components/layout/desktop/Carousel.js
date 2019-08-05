import React, { useState } from 'react';
import CarouselNav from './CarouselNav';
import Slides from './Slides';
import urls from '../../../utils/imgHelper';

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const prevSlide = () => {
    const maxImgIndex = urls.length - 1;
    imgIndex === 0 ? setImgIndex(maxImgIndex) : setImgIndex(imgIndex - 1);
  };

  const nextSlide = () => {
    const maxImgIndex = urls.length - 1;
    imgIndex === maxImgIndex ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };

  const keyHandler = e => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      e.target.className === 'slide-arrow slide-arrow-left'
        ? prevSlide()
        : nextSlide();
    }
  };
  return (
    <div>
      <CarouselNav
        direction="left"
        clickHandler={prevSlide}
        keyHandler={keyHandler}
        symbol="&#9664;"
      />
      <Slides imgUrl={urls[imgIndex]} />
      <CarouselNav
        direction="right"
        clickHandler={nextSlide}
        keyHandler={keyHandler}
        symbol="&#9654;"
      />
    </div>
  );
};

export default Carousel;
