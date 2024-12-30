'use client';
import React from 'react';
import Carousel from '@/components/Interface/CustomFeature/Carousal';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <div className='max-w-7xl flex flex-col items-center'>
        <div className=''>
          <Image
            src={'/assets/girl-programmer.png'}
            alt='dev'
            width={600}
            height={300}
            className=''
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
