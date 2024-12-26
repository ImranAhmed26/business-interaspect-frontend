'use client';
import styles from './page.module.scss';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import StackedCards from '@/components/interface/customFeature/StackedCards';
import { StackedCardConst } from '@/constants/landingPage';

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className='relative mt-[1vh] w-full'>
      {StackedCardConst.map((project, i) => {
        const targetScale = 1 - (StackedCardConst.length - i) * 0.05;
        return (
          <StackedCards
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.5, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
