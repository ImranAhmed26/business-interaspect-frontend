import Banner from '@/components/Home/Banner';
import Projects from '@/components/Home/Impact';
import WorkWithUs from '@/components/Home/Process';

function Home() {
  return (
    <main>
      <Banner />
      <WorkWithUs />
      <Projects />
      <div className='h-dvh'></div>
    </main>
  );
}

export default Home;
