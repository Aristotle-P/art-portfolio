import React from 'react';
import PropTypes from 'prop-types';

const CarouselNav = ({ direction, clickHandler, keyHandler, symbol }) => {
  return (
    <div
      className={`slide-arrow slide-arrow-${direction}`}
      onClick={clickHandler}
      onKeyDown={keyHandler}
      role="button"
      tabIndex="0"
    >
      {symbol}
    </div>
  );
};

CarouselNav.propTypes = {
  direction: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  keyHandler: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired
};

export default CarouselNav;
