import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/components/shared/Utils';

const H4 = ({ para }: { para: string }) => {
  return (
    <motion.h4
      className='text-xl font-base mx-auto text-center max-w-5xl sm:text-2xl'
      variants={itemVariants}
    >
      {para}
    </motion.h4>
  );
};

export default H4;
