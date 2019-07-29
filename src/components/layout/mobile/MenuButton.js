import React, { useState } from 'react';
import Menu from './Menu';

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menu;
  if (menuOpen) {
    menu = <Menu />;
  }
  return (
    <div>
      <button
        type="button"
        className="hamburgerButton"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Click me!
      </button>
      {menu}
    </div>
  );
};

export default MenuButton;
