import React from 'react';
import MenuItem from '../MenuItem';

const SideNav = () => {
  const menu = [
    'Home',
    'Original Art',
    'Fan Art',
    'Commissions',
    'About',
    'Contact'
  ];
  const navItems = menu.map((item, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <MenuItem key={index} index={index} title={item} />;
  });

  return (
    <div>
      <div style={{ height: 200, width: 200, backgroundColor: 'blue' }} />
      {navItems}
    </div>
  );
};

export default SideNav;
