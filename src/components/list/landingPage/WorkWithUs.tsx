'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/shared/Utils';

const WorkWithUs = () => {
  return (
    <motion.div
      className='flex flex-col items-center gap-4 w-full bg-sky-500'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='space-y-5 max-w-7xl mx-auto text-center bg-indigo-200 w-full h-[70dvh]'
        variants={itemVariants}
      >
        <div className=''>Hello</div>
      </motion.div>
    </motion.div>
  );
};

export default WorkWithUs;
