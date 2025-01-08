import IndustryHero  from '@/components/Home/Industries';

const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='Nonprofit Solutions'
        description='Empower your nonprofit organization with impactful digital tools'
        image='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
