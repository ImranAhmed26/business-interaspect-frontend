import IndustryHero  from '@/components/Home/Industries';

 const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='Real Estate Solutions'
        description='Transform your real estate business with modern digital solutions'
        image='https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
