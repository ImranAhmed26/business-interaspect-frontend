'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/shared/Utils';
import Image from 'next/image';
import PartnershipLight from '../../../../public/assets/partnership-light.png';
import PartnershipDark from '../../../../public/assets/partnership-dark.png';
import { useTheme } from 'next-themes';
import H3 from '@/components/interface/typography/H3';
import { WorkWithUsPoints } from '@/constants/landingPage';

const WorkWithUs = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={36}
        height={36}
        sizes='36x36'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    );
  return (
    <motion.div
      className='flex flex-col items-center gap-4 w-full pt-24 lg:pt-0 z-10 lg:overflow-hidden'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.div
        className='relative w-full max-w-7xl h-[70dvh] space-y-5 mx-auto py-10 sm:p-10 text-center bg-white dark:bg-gray-900/80 rounded-3xl flex gap-4 '
        variants={itemVariants}
      >
        <div className='max-w-fit'>
          <H3 para={`Working with us is simple, hassle free and fast`} />
          <motion.div
            variants={itemVariants}
            className='pt-10 h-full flex flex-col justify-center'
          >
            {WorkWithUsPoints.map((point, index: number) => {
              return (
                <motion.div
                  className='max-w-md sm:text-xl flex gap-3 items-center font-normal bg-gray-200 dark:bg-[#1a2744] m-3 py-4 px-3 rounded-xl cursor-pointer'
                  key={index}
                >
                  {point.iconLight} {point.text}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className='absolute right-16 -top-60 -z-10 w-48 md:w-64 lg:right-24 lg:top-0 lg:z-10 lg:w-fit'>
          {!isDark ? (
            <Image
              src={PartnershipLight}
              alt='partnership'
              width={400}
              height={500}
            />
          ) : (
            <Image
              src={PartnershipDark}
              alt='partnership'
              width={400}
              height={500}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkWithUs;
