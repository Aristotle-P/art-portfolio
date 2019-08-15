import React from 'react';
import MenuItem from '../MenuItem';
import '../../../styles/layout/mobile/Menu.css';

const Menu = () => {
  const menu = [
    'Home',
    'Original Art',
    'Fan Art',
    'Commissions',
    'About',
    'Contact'
  ];
  const menuItems = menu.map((item, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <MenuItem key={index} index={index} title={item} />;
  });

  return <div className="menu">{menuItems}</div>;
};

export default Menu;
