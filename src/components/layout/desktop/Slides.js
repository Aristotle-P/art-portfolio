import React from 'react';

const Slides = ({ imgUrl }) => {
  const styles = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return <div className="image-style" style={styles} />;
};

export default Slides;
