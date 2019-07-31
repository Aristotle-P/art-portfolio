import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getUrl from '../../utils/urlHelper';

const MenuItem = ({ title }) => {
  const [myTitle] = useState(title);

  return (
    <div>
      <Link
        to={{
          pathname: `/${getUrl(title)}`,
          state: { myTitle }
        }}
      >
        {title}
      </Link>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default MenuItem;
