import { colorClasses } from '@/lib/helper';
import { projectItem } from '@/types/projectItem';
import { motion } from 'framer-motion';
import Image from 'next/image';

type CardProps = projectItem & { index: number };

export function Card({
  index,
  title,
  subTitle,
  description,
  imagePrimary,
  imageSecondary,
  type,
  color,
  link,
}: CardProps) {
  const projectColor = colorClasses[color] || '';

  return (
    <motion.div
      className='flex flex-col md:flex-row h-[60dvh] 2xl:h-[55dvh] overflow-hidden shadow-lg rounded-large md:rounded-3xl '
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      key={index}
    >
      <div className='p-6 gap-1 flex flex-col md:w-1/2 flex-grow order-2 md:order-1'>
        <p className='md:mb-4 md:text-xl drop-shadow-lg'>{type}</p>
        <h2 className='text-xl lg:text-4xl font-bold drop-shadow md:mb-2 pt-2 md:pt-5'>
          {title}
        </h2>
        <p className=' md:mb-4 md:text-xl font-semibold text-brandLight dark:text-brandDark'>
          {subTitle}
        </p>
        <p className='md:mb-4 text-xs text-gray-500 dark:text-gray-400 max-h-24 overflow-hidden'>
          {description}
        </p>
        {link && (
          <p
            className='mb- lg:mt-6 text-brandDark cursor-pointer max-w-min'
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
          >
            {link?.split('https://')[1] || ''}
          </p>
        )}
      </div>
      <div
        className={`relative md:w-1/2 overflow-hidden md:p-10 ${projectColor} md:flex flex-col justify-end order-1 md:order-2`}
      >
        {/* First Image (Initially behind) */}
        <motion.div
          className='absolute top-9 right-16 w-4/6 z-0 hidden md:block'
          initial={{ scale: 1, zIndex: 0 }}
          whileHover={{
            scale: 1.1,
            zIndex: 20,
            transition: { duration: 0.3 },
          }}
        >
          <Image src={imageSecondary} alt={title} className='rounded-large' />
        </motion.div>

        {/* Second Image (Initially in front) */}
        <motion.div
          className='md:relative z-10'
          initial={{ scale: 1, zIndex: 10 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Image src={imagePrimary} alt={title} className='md:rounded-large' />
        </motion.div>
      </div>
    </motion.div>
  );
}
