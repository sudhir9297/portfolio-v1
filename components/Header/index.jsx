import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import Hamburger from '../Hamburger';
import ColorModeButton from '../ColorModeButton';

function Header() {
  const [y, setY] = useState(0);
  const [isUp, setIsUp] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;

      if (y >= window.scrollY && !isUp) {
        gsap.to('#header', {
          yPercent: 0,
          delay: 0.3,
          opacity: 1,
          ease: 'power.easeInOut',
        });
        setIsUp(true);
      } else if (y < window.scrollY && isUp) {
        gsap.to('#header', {
          yPercent: -100,
          delay: 0.3,
          opacity: 0,
          ease: 'power.easeInOut',
        });
        setIsUp(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header id="header" className="pt-5 fixed top-0 w-full box-border">
      <div className="flex justify-between mx-7  pb-6">
        <div className="text-4xl flex items-center font-sans font-medium">
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
