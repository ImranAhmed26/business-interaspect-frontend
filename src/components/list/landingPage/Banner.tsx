'use client';

import { BannerConst, HighLightedWords } from '@/constants/landingPage';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/shared/Utils';
import { highlightWords } from './Utils';
import H4 from '@/components/interface/typography/H4';
import ActionButton from '@/components/interface/button/ActionButton';
import AltButton from '@/components/interface/button/AltButton';

const Banner = () => {
  const handleStartBuilding = () => {};

  return (
    <motion.div
      className='flex flex-col items-center gap-4 w-full h-[74vh]'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='space-y-5 max-w-4xl mx-auto text-center'
        variants={itemVariants}
      >
        <motion.h1
          className='text-3xl font-extrabold mx-auto sm:text-6xl'
          variants={itemVariants}
        >
          {highlightWords(BannerConst.title, HighLightedWords)}
        </motion.h1>
        <motion.p
          className='max-w-2xl font-extralight text-xl sm:text-2xl text-brandLight dark:text-brandDark mx-auto'
          variants={itemVariants}
        >
          {BannerConst.subTitle}
        </motion.p>
      </motion.div>
      <motion.div
        className='flex items-center justify-center gap-4 pt-10'
        variants={itemVariants}
      >
        <ActionButton title='Start building' func={handleStartBuilding} />
        <AltButton title='Learn more' func={handleStartBuilding} />
      </motion.div>
      <motion.div>
        <div className='pt-20 '>
          <H4 para={BannerConst.description} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
