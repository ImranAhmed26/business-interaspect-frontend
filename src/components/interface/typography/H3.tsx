import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/components/shared/Utils';

const H3 = ({ para }: { para: string }) => {
  return (
    <motion.h4
      className='text-xl font-medium sm:font-normal sm:text-3xl text-center max-w-5xl font-base mx-auto '
      variants={itemVariants}
    >
      {para}
    </motion.h4>
  );
};

export default H3;
