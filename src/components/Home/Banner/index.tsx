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

const Banner = () => {
  const handleStartBuilding = () => {};

  return (
    <motion.div
      className='flex flex-col items-center gap-4 w-full lg:h-[90vh] sm:px-4 md:px-8 py-2 lg:mt-20 xl:mt-28'
      variants={containerVariants()}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='space-y-5 lg:max-w-5xl mx-auto text-center'
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
        <ActionButton title='Start building' func={handleStartBuilding} />
        <AltButton title='Learn more' func={handleStartBuilding} />
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
