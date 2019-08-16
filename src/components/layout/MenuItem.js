import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getUrl from '../../utils/urlHelper';
import '../../styles/layout/mobile/MenuItem.css';

const MenuItem = ({ title }) => {
  const [myTitle] = useState(title);

  return (
    <div className="link-container">
      <Link
        to={{
          pathname: `/${getUrl(title)}`,
          state: { myTitle }
        }}
        className="menu-link"
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
