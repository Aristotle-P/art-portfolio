import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ title }) => {
  const [myTitle] = useState(title);

  let url = title;
  if (title === 'Original Art') {
    url = 'art/original-art';
  } else if (title === 'Fan Art') {
    url = 'art/fan-art';
  } else if (title === 'Commissions') {
    url = 'art/commissions';
  } else if (title === 'Home') {
    url = '';
  } else {
    url = title;
  }

  return (
    <Link
      to={{
        pathname: `/${url}`,
        state: { myTitle }
      }}
    >
      {title}
    </Link>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default MenuItem;
