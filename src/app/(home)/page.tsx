import Banner from '@/components/Home/Banner';
import Features from '@/components/Home/Services';
import Projects from '@/components/Home/Impact';
import WorkWithUs from '@/components/Home/Process';

function Home() {
  return (
    <main>
      <Banner />
      <WorkWithUs />
      <Projects />
      <Features />
      <div className='h-dvh'></div>
    </main>
  );
}

export default Home;
