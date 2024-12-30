import Banner from '@/components/Home/Banner';
import Features from '@/components/Home/Services';
import Impact from '@/components/Home/Impact';
import Process from '@/components/Home/Process';
import Projects from '@/components/Home/Projects';

function Home() {
  return (
    <main>
      <Banner />
      <Process />
      <Impact />
      <Features />
      <Projects />
    </main>
  );
}

export default Home;
