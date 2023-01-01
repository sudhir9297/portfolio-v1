import React, { useState, useEffect, useRef } from 'react';
import { gsap, CSSPlugin, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin);

function GsapAnimation({ animationgNumber = 100 }) {
  const ref = useRef();
  const heightRef = useRef();
  const [numberHeight, setNumberHeight] = useState(100);

  const NUMBERS = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
  ];

  const animteTonumberString = String(Math.abs(animationgNumber));
  const animateToNumbersArr = Array.from(animteTonumberString, Number).map(
    (x, idx) => (isNaN(x) ? animteTonumberString[idx] : x)
  );

  useEffect(() => {
    window.addEventListener('resize', function () {
      const height = heightRef.current.getClientRects()?.[0]?.height;
      if (height) {
        setNumberHeight(height);
      }
    });

    return () => {
      window.removeEventListener('resize', null);
    };
  }, [animationgNumber]);

  useEffect(() => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log('hello');
      },
    });
    const data = document.querySelectorAll('.number');
    t1.fromTo(
      data,
      {
        transform: 'translateY(0px)',
      },
      {
        transform: (i) => {
          return `translateY(${
            -1 * (numberHeight * animateToNumbersArr[i]) - numberHeight * 20
          }px)`;
        },
        duration: 4,
        ease: Expo.easeInOut,
        stagger: {
          amount: 0.5,
        },
      }
    );
    // .to(
    //   '.counterWrapper',
    //   {
    //     height: '0px',
    //   },
    //   '+=0.5'
    // )
    // .to('.loadingWrapper', {
    //   opacity: 0,
    // });
  });

  return (
    <div className="loadingWrapper bg-[#152A21]  w-full h-full flex items-start justify-end pt-12 pr-12 text-8xl absolute top-0 left-0 z-10">
      <div
        className={`counterWrapper h-[15vw]  flex overflow-hidden float-right relative`}
      >
        {animateToNumbersArr.map((_, idx) => (
          <div key={idx} className="number ">
            {NUMBERS.map((o, idx) => (
              <div
                key={idx}
                className={`text-[15vw] overflow-hidden font-anton text-white `}
                ref={ref}
              >
                {o}
              </div>
            ))}
          </div>
        ))}
        <div className={`text-[15vw] font-anton text-white`}>%</div>

        <div
          ref={heightRef}
          style={{ position: 'absolute', top: -999 }}
          className={`text-[15vw] font-anton`}
        >
          {0}
        </div>
      </div>
    </div>
  );
}

export default GsapAnimation;
