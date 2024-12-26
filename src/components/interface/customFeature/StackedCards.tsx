'use client';
import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type StackCard = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const StackedCards = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}: StackCard) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-20 '
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 55}px)`,
        }}
        className='flex flex-col relative -top-[25%] h-[600px] w-full rounded-3xl p-12 transform-origin-top'
      >
        <h2 className='text-center m-0 text-[28px]'>{title}</h2>
        <div className='flex h-full mt-12 gap-12'>
          <div className='relative top-[10%] w-2/5'>
            <p className='text-[16px] first-letter:text-[28px] first-letter:font-title'>
              {description}
            </p>
            <span className='flex items-center gap-1'>
              <a
                href={url}
                target='_blank'
                className='text-[12px] underline cursor-pointer'
              >
                See more
              </a>
            </span>
          </div>
          <div className='relative w-3/5 h-full rounded-2xl overflow-hidden'>
            <motion.div className='w-full h-full' style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt='image' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StackedCards;
