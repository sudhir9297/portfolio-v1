import React, { useEffect, useState } from 'react';
import { SiStarship } from 'react-icons/si';
import { useScrollDirection } from '../../lib/customHooks/useScrollDirection';
import { debounce } from '../../lib/util';
import { gsap } from 'gsap';

function Marquee({ title, size = 10, duration = 14, seperator = true }) {
  const scrollDirection = useScrollDirection();
  const [tween, setTween] = useState();
  const [renderOnce, setRenderOnce] = useState(true);

  useEffect(() => {
    const t1 = MarqueeFun('.marqueeContent', { duration: duration });
    setRenderOnce(false);
    setTween(t1);
  }, [duration, size, seperator]);

  useEffect(() => {
    if (!renderOnce) {
      gsap.to([tween], {
        timeScale: scrollDirection === 'up' ? 1 : -1,
        overwrite: true,
      });
    }

    return () => {};
  }, [scrollDirection]);

  const MarqueeFun = (targets, variable) => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();
    variable = variable || {};
    variable.ease || (variable.ease = 'none');
    const t1 = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
      },
    });

    const elements = gsap.utils.toArray(targets);
    const clones = elements.map((el) => {
      let clone = el.cloneNode(true);
      el.parentNode.appendChild(clone);
      return clone;
    });

    const positionClones = () =>
      elements.forEach((el, i) =>
        gsap.set(clones[i], {
          position: 'absolute',
          overwrite: false,
          top: el.offsetTop,
          left: el.offsetWidth,
        })
      );
    positionClones();

    elements.forEach((el, i) =>
      t1.to([el, clones[i]], { xPercent: -100, ...variable }, 0)
    );
    t1.progress(progress);

    window.addEventListener(
      'resize',
      debounce(() => {
        let time = t1.totalTime();
        t1.totalTime(0);
        positionClones();
        t1.totalTime(time);
      })
    );

    return t1;
  };

  return (
    <div className="relative marquee w-full flex overflow-hidden">
      <div className="marqueeContent whitespace-nowrap flex justify-around">
        {[0].map((el) => (
          <div
            key={el}
            className="title whitespace-nowrap flex items-center"
            style={{
              fontSize: `${size}vw`,
            }}
          >
            <span className="font-anton">{title}</span>
            {seperator && <SiStarship className="mx-2" color="#E23C18" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

{
  /*  const scrollDirection = useScrollDirection();
  const [tween, setTween] = useState();

  useEffect(() => {
    const Marquee = () => {
      let progress = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();

      const marquee = document.querySelector('.marquee');
      if (!marquee) return;

      const marqueeContent = marquee.firstChild;
      if (!marqueeContent) return;
      const marqueeContentClone = marqueeContent.cloneNode(true);
      marquee.append(marqueeContentClone);

      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue('width'),
        10
      );
      const distance = -1 * width;
      const t1 = gsap.fromTo(
        marquee.children,
        {
          x: 0,
        },
        {
          x: distance,
          duration: 5,
          ease: 'none',
          repeat: -1,
          duration: duration,
        }
      );
      t1.progress(progress);
      setTween(t1);
    };

    Marquee();
    window.addEventListener('resize', debounce(Marquee));
    return () => {
      window.removeEventListener('resize', Marquee);
    };
  }, [duration, size, seperator]);

  //   useEffect(() => {
  //     console.log(scrollDirection === 'up' ? 1 : -1, tween);

  //     gsap.to([tween], {
  //       timeScale: scrollDirection === 'up' ? 1 : -1,
  //     });

  //     return () => {};
  //   }, [scrollDirection]);

  return (
    <div className="marquee w-full flex overflow-hidden ">
      <div className=" relative whitespace-nowrap  flex justify-around w-full ">
        {[0].map((el) => (
          <div
            key={el}
            className="title whitespace-nowrap flex items-center"
            style={{
              fontSize: `${size}vw`,
            }}
          >
            <span className="font-anton">{title}</span>
            <SiStarship className="mx-2" color="#E23C18" />
          </div>
        ))}
      </div>
    </div>
  ); */
}
