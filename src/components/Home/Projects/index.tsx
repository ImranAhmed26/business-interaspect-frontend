'use client';
import React, { useEffect, useState } from 'react';
import Carousel from '@/components/Interface/CustomFeature/Carousal';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Projects = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>[]</div>;

  return (
    <div className='flex flex-col justify-center items-center pt-20 '>
      <div className='max-w-7xl flex flex-col items-center gap-10 '>
        <div className='px-10 sm:px-20 '>
          {!isDark ? (
            <Image
              src={'/assets/girl-programmer.png'}
              alt='dev'
              width={600}
              height={300}
              className=''
            />
          ) : (
            <Image
              src={'/assets/girl-programmer-dark.png'}
              alt='dev'
              width={600}
              height={300}
              className=''
            />
          )}
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
