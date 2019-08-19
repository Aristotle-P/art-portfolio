import React, { useState, useRef } from 'react';
import Menu from './Menu';
import '../../../styles/layout/mobile/MenuButton.css';

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const button = useRef(null);

  let menu;
  if (menuOpen) {
    menu = <Menu />;
  }

  return (
    <div className="button-container">
      <button
        type="button"
        className="hamburger-button"
        ref={button}
        onClick={() => {
          setMenuOpen(!menuOpen);
          button.current.blur();
        }}
      >
        <span className={menuOpen ? 'fa fa-times' : 'fa fa-bars'} />
      </button>
      {menu}
    </div>
  );
};

export default MenuButton;
