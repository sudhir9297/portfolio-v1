import React from 'react';
import Hamburger from '../Hamburger';

function Header() {
  return (
    <div className="pt-5">
      <div className="flex justify-between mx-7  pb-6">
        <div>Misfit Whale</div>
        <div className="flex justify-between">
          <div>color</div>
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default Header;
