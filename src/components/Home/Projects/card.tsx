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
      className='flex flex- h-[60dvh] 2xl:h-[55dvh] overflow-hidden shadow-lg rounded-3xl '
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      key={index}
    >
      <div className='p-6 flex flex-col w-1/2 flex-grow'>
        <p className='mb-4 text-xl drop-shadow-lg'>{type}</p>
        <h2 className='text-2xl lg:text-4xl font-bold drop-shadow mb-2 pt-5'>
          {title}
        </h2>
        <p className='mb-4 text-xl font-semibold text-brandLight dark:text-brandDark'>
          {subTitle}
        </p>
        <p className='mb-4 text-gray-500 dark:text-gray-400'>{description}</p>
        {link && (
          <p
            className='mb-4 lg:mt-6 text-brandDark cursor-pointer'
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
          >
            {link?.split('https://')[1] || ''}
          </p>
        )}
      </div>
      <div
        className={`relative w-1/2 overflow-hidden p-10 ${projectColor} flex flex-col justify-end`}
      >
        {/* First Image (Initially behind) */}
        <motion.div
          className='absolute top-9 right-16 w-4/6 z-0'
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
          className='relative z-10'
          initial={{ scale: 1, zIndex: 10 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Image src={imagePrimary} alt={title} className='rounded-large' />
        </motion.div>
      </div>
    </motion.div>
  );
}
