import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import Hamburger from '../Hamburger';
import ColorModeButton from '../ColorModeButton';
import { useScrollDirection } from '../../lib/customHooks/useScrollDirection';

function Header() {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === 'up') {
      gsap.to('#header', {
        yPercent: 0,
        delay: 0.3,
        opacity: 1,
        ease: 'power.easeInOut',
      });
    } else if (scrollDirection === 'down') {
      gsap.to('#header', {
        yPercent: -100,
        delay: 0.3,
        opacity: 0,
        ease: 'power.easeInOut',
      });
    }
  }, [scrollDirection]);

  return (
    <header id="header" className="pt-5 fixed top-0 w-full box-border">
      <div className="flex justify-between mx-7  pb-6">
        <div className="text-4xl flex items-center font-anton font-medium">
          MISFIT.
        </div>
        <div className="flex justify-between items-center">
          <ColorModeButton />
          <Hamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
