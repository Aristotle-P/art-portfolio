import React, { useState } from 'react';
import Menu from './Menu';
import '../../../styles/layout/mobile/MenuButton.css';

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
        <span className={menuOpen ? 'fa fa-times' : 'fa fa-bars'} />
      </button>
      {menu}
    </div>
  );
};

export default MenuButton;
