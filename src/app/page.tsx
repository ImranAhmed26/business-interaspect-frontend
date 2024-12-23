import Banner from '@/components/list/landingPage/Banner';
import WorkWithUs from '@/components/list/landingPage/WorkWithUs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 sm:items-start  lg:w-[80vw]'>
        <Banner />
        <WorkWithUs/>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
