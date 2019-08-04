import React from 'react';

const CarouselNav = (direction, clickHandler, symbol) => {
  return (
    <div
      className={`slide-arrow slide-arrow-${direction}`}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex="0"
    >
      {symbol}
    </div>
  );
};

export default CarouselNav;
