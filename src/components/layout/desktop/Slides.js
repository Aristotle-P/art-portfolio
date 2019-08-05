import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Slides = ({ imgUrl }) => {
  const slide = useRef(null);
  useEffect(() => {
    slide.current.focus();
  });

  const styles = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 200,
    width: 200
  };
  return (
    <div
      className="image-style"
      style={styles}
      ref={slide}
      role="link"
      tabIndex="0"
    />
  );
};

Slides.propTypes = {
  imgUrl: PropTypes.string.isRequired
};

export default Slides;
