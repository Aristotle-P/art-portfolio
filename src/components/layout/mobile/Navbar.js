import React from 'react';
import MenuButton from './MenuButton';
import '../../../styles/layout/mobile/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Art by Vinnious</h3>
      <MenuButton />
    </div>
  );
};

export default Navbar;
