'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '@/components/Shared/FramerConsts';
import Image from 'next/image';
import PartnershipLight from '../../../../public/assets/partnership-light.png';
import PartnershipDark from '../../../../public/assets/partnership-dark.png';
import { useTheme } from 'next-themes';
import H3 from '@/components/UI/Typography/H3';
import { BannerConst, WorkWithUsPoints } from '@/constants/landingPage';

const WorkWithUs = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>[]</div>;
  return (
    <motion.div
      className='flex flex-col items-center gap-4 w-full pt-24 lg:pt-0 z-10'
      variants={containerVariants(0.2)} // Stagger children with a smooth delay
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.div
        className='relative w-full max-w-7xl h-[62vh] lg:h-[70dvh] space-y-5 mx-auto py-10 sm:p-10 text-center bg-white dark:bg-gray-900/80 rounded-3xl flex gap-4 lg:overflow-hidden'
        variants={itemVariants(0.5, 30)} // Customize animation for this container
      >
        <div className='max-w-fit'>
          <H3 para={`Working with us is simple, hassle-free, and fast`} />
          <motion.div
            variants={containerVariants(0.4)} // Stagger speed for the list
            className='pt-10 h-full flex flex-col justify-center'
          >
            {WorkWithUsPoints.map((point, index: number) => (
              <motion.div
                key={index}
                className='max-w-md sm:text-xl flex gap-3 items-center font-normal bg-gray-200 dark:bg-[#1a2744] m-3 py-4 px-3 rounded-xl cursor-pointer'
                variants={itemVariants(0.5, 20)} // Slight upward motion for items
              >
                {point.iconLight} {point.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className='absolute right-16 -top-60 -z-10 w-48 md:w-64 lg:right-24 lg:top-0 lg:z-10 lg:w-fit'
          initial={{ opacity: 0, x: 100 }} // Image starts off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animation triggers on scroll
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the image is in view
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
        </motion.div>
      </motion.div>
      <motion.div className='py-20'>
        <H3 para={BannerConst.description2} />
      </motion.div>
    </motion.div>
  );
};

export default WorkWithUs;
