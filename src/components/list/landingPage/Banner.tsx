import { BannerConst } from '@/constants/landingPage';
import React from 'react';

const Banner = () => {
  const highlightWords = (text: string, wordsToHighlight: string[]) => {
    const regex = new RegExp(
      `(${wordsToHighlight
        .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|')})`,
      'gi'
    );
    return text.split(regex).map((part, index) =>
      wordsToHighlight.includes(part.toLowerCase()) ? (
        <span key={index} className=' text-brandLight dark:text-brandDark'>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <div></div>
      <div className='space-y-5 max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl font-extrabold mx-auto sm:text-6xl'>
          {highlightWords(BannerConst.title, ['skilled', 'build', '$40'])}
        </h1>
        <p className='max-w-2xl font-extralight text-2xl text-brandLight dark:text-brandDark mx-auto'>
          {BannerConst.subTitle}
        </p>
      </div>
      <div className='flex items-center justify-center gap-x-3 font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900'>
        <button className='py-2.5 px-4 text-center rounded-full duration-150'>
          Start building
        </button>
      </div>
    </div>
  );
};

export default Banner;
