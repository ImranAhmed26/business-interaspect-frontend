import React from 'react';

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='mx-auto w-full max-w-3xl px-4 text-center sm:px-8 lg:mb-16 lg:mt-16 xl:px-0'>
      <h2 className='text-5xl font-bold -tracking-[1.6px] text-black dark:text-white lg:text-heading-4 xl:text-heading-2'>
        {title}
      </h2>

      <p className='text-xl text-brandDark mx-auto w-full max-w-2xl mt-5'>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
