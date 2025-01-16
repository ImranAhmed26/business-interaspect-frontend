'use client';
import ActionButton from '@/components/Interface/Button/ActionButton';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface IndustryHeroProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  mainText?: string;
  subText?: string;
  subText2?: string;
}

type HousingComponentTwo = {
  data: { name: string; desc: string; image: StaticImageData }[];
};

function IndustryHero({ title, description, image }: IndustryHeroProps) {
  return (
    <section className='pt-32 pb-16 px-4 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10' />
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            {title}
          </h1>
          <p className='text-xl text-muted-foreground'>{description}</p>
        </div>
        <div className='mt-12 p-2 relative rounded-4xl border-black/10 bg-gray-200 aspect-[16/9]'>
          <div className='flex justify-between rounded-3xl border-black/10 overflow-hidden h-full max-w-6xl 2xl:max-w-7x'>
            <div className='text-3xl font-extrabold p-4 w-3/5 bg-white dark:bg-gray-900/80 text-center'>
              {title}
            </div>
            <Image
              src={image}
              alt={title}
              width={600}
              className='object-cover w-2/5'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryHero;

export const HousingComponent = ({
  title,
  description,
  image,
  mainText,
  subText,
  subText2,
}: IndustryHeroProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://calendly.com/business-interaspect/free-consultation');
  };
  return (
    <div className='bg-lime-5 w-scree lg:pt-24 bg-green- max-w-6xl'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
          {title}
        </h1>
        <p className='text-xl'>{description}</p>
      </div>
      <div className='mt-12 mx-auto p- rounded-4xl border-black/10 dark:border-black/30 border-bg-gray-200 border-8 aspect-[16/9] w-[80dvw] max-w-6xl'>
        <div className='flex justify-between gap-4 items-center rounded-3xl border-black/10 bg-white/90 dark:bg-gray-900/10 overflow-hidden h-full w-full px-8'>
          {/* Left Text Section */}
          <div className='flex flex-col justify-center items-center gap-1 bg-sky-20 w-1/2 py-4 px-8 bg-gra-100 text-center'>
            <h1 className='text-2xl md:text-5xl font-bold mb-1 leading-tight max-w-96 '>
              {mainText}
            </h1>
            <h4 className='text-lg text-brandLight'>{subText}</h4>
            <h4 className='text-lg pt-10'>{subText2}</h4>
            <div>
              <ActionButton title='Book appointment today' func={handleClick} />
            </div>
          </div>

          {/* Right Image Section */}
          <div className='w-2/4 h-[90%] shadow-lg rounded-3xl overflow-clip relative'>
            <Image
              src={image}
              width={800}
              height={600}
              className='object-cover object-left w-full h-full'
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HousingComponentTwo = ({ data }: HousingComponentTwo) => {
  return (
    <div className='pt-10 relative overflow-clip max-w-6xl bg-red-'>
      <div className='flex justify-center'>
        <div className='flex justify-between py-8 gap-4 px-2 '>
          <div className='text-2xl lg:text-4xl font-bold w-1/3 bg-red-20 text-center'>{`Seamless Solutions with Zero Hassle`}</div>
          <div className='text-lg w-3/5'>{`Concentrate on growing your business, building your brand, and reaching new heights of success. Let us take care of the technical complexities—from managing systems to optimizing performance—so you can focus on what truly matters: achieving your goals and delivering exceptional value to your customers.`}</div>
        </div>
      </div>
      <div className='flex gap-4 justify-around  mx-auto'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='rounded-3xl overflow-hidden max-h-[400px] max-w-[350px] flex justify-center drop-shadow-md'
            >
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className='rounded-3xl overflow-hidden max-h-[400px] max-w-[350px] flex justify-center drop-shadow-md'
              >
                <Image
                  src={item.image}
                  width={400}
                  height={300}
                  alt={item.toString()}
                  className=''
                />
              </motion.div>
              <div className='absolute min-w-72 text-center bottom-10 px-4 py-2 rounded-xl text-xl font-bold bg-white/60 dark:bg-black/60 max-w-[350px] drop-shadow-lg'>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
