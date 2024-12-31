import { Service } from '@/types/Home/serviceItem';
import React from 'react';

const ServiceItem = ({ data }: { data: Service }) => {
  return (
    <div className='rounded-2xl bg-[#fff] dark:bg-gray-900/80  p-9 shadow-1 hover:shadow-features dark:bg-gray-dark m-3'>
      <div className='flex items-center gap-2 pb-2'>
        <div className='text-3xl text-brandLight dark:text-brandDark'>
          {data.icon}
        </div>
        <h3 className='mb-4.5 mt-7.5 text-2xl pt-0 font-bold '>{data.title}</h3>
      </div>
      <p className='dark:text-gray-5 min-h-32'>{data.description}</p>
    </div>
  );
};

export default ServiceItem;
