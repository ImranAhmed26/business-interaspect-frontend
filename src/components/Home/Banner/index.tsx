'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BannerData, HighLightedWords } from '@/constants/landingPage';
import {
  containerVariants,
  itemVariants,
} from '@/components/Shared/FramerConsts';
import { HighlightWords } from '../../Interface/CustomFeature/HighlightedWords';
import H4 from '@/components/Interface/Typography/H4';
import ActionButton from '@/components/Interface/Button/ActionButton';
import AltButton from '@/components/Interface/Button/AltButton';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  const handleStartBuilding = () => {
    router.push('https://calendly.com/business-interaspect/free-consultation');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <motion.div
      className='flex flex-col items-center justify-between lg:justify-start gap-4 w-full h-[75vh] lg:h-[80vh] sm:px-4 px-8 my-20 lg:my-0 lg:mt-20 xl:mt-28 bg-lime-30'
      variants={containerVariants()}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='space-y-5 max-w-80 lg:max-w-4xl mx-auto text-center'
        variants={itemVariants()}
      >
        <motion.h1
          className='text-3xl md:text-5xl lg:text-6xl font-extrabold mx-auto '
          variants={itemVariants()}
        >
          {HighlightWords(BannerData.title, HighLightedWords)}
        </motion.h1>
        <motion.p
          className='max-w-2xl font-extralight text-xl sm:text-2xl text-brandLight dark:text-brandDark mx-auto'
          variants={itemVariants()}
        >
          {BannerData.subTitle}
        </motion.p>
      </motion.div>
      <motion.div
        className='flex items-center justify-center gap-4 pt-10'
        variants={itemVariants()}
      >
        <ActionButton
          title='Schedule free consultation'
          func={handleStartBuilding}
        />
        <AltButton title='Learn more' func={handleLearnMore} />
      </motion.div>
      <motion.div>
        <div className='pt-20 '>
          <H4 para={BannerData.description} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
