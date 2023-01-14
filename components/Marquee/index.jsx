import React from 'react';
import { SiStarship } from 'react-icons/si';
import { useScrollDirection } from '../../lib/customHooks/useScrollDirection';

function Marquee({ title, size = 12, duration = 14, seperator = false }) {
  const scrollDirection = useScrollDirection();

  return (
    <div className=" w-full overflow-hidden">
      <div className="relative whitespace-nowrap  flex ">
        {[0, 1, 2].map((el) => (
          <div
            key={el}
            className=" animate-marquee whitespace-nowrap flex items-center"
            style={{
              fontSize: `${size}vw`,
              animationDuration: `${duration}s`,
              animationDirection:
                scrollDirection === 'up' ? 'normal' : 'reverse',
            }}
          >
            <span className="font-anton mx-8">{title}</span>
            {seperator && <SiStarship className="" color="#E23C18" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

{
  /*  */
}
