/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Art = props => {
  const {
    location: {
      state: { myTitle }
    }
  } = props;
  return (
    <div>
      <h1>{myTitle}</h1>
    </div>
  );
};

Art.propTypes = {
  myTitle: PropTypes.string
};

Art.defaultProps = {
  myTitle: ''
};

export default Art;
