'use client';
import Image, { StaticImageData } from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type StackCard = {
  i: number;
  title: string;
  subTitle: string;
  description: string;
  src: StaticImageData;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const StackedCards = ({
  i,
  title,
  description,
  src,
  subTitle,
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
      className='h-screen  flex items-center justify-center sticky top-10 bg-red-10 2xl:px-20 max-w-screen-2xl '
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 55}px)`,
        }}
        className='bg-gray-300/40  dark:bg-gray-900/70 backdrop-blur-2xl flex flex-col relative -top-[25%] h-[70dvh] rounded-3xl p-12 transform-origin-top'
      >
        <div className='flex h-full mt-2 gap-12'>
          <div className='flex flex-col justify-center gap-4 relative w-2/4 bg-lime-20 '>
            <h2 className='text-center  text-5xl 2xl:text-6xl font-extrabold m-0'>
              {title}
            </h2>
            <h3 className='text-3xl text-brandLight font-medium text-center'>
              {subTitle}
            </h3>
            <p className='text-xl text-center'>{description}</p>
          </div>
          <div className='flex justify-center items-start relative w-2/4 h-full rounded-2xl overflow-hidden pt-0 bg-sky-20'>
            <motion.div
              className='flex justify-center items-center h-[90%] bg-rose-20 pt-10'
              style={{ scale: imageScale }}
            >
              <div className='w-[79%] bg-rose-30'>
                <Image src={src} alt='image' className='object-contai' />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StackedCards;