import React from 'react';
import Hamburger from '../Hamburger';
import ColorModeButton from '../ColorModeButton';

function Header() {
  return (
    <div className="pt-5">
      <div className="flex justify-between mx-7  pb-6">
        <div>Misfit.</div>
        <div className="flex justify-between items-center">
          <ColorModeButton />
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default Header;
