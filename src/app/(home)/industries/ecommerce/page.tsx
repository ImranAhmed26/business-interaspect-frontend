import IndustryHero  from '@/components/Home/Industries';

 const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='E-commerce Solutions'
        description='Build and scale your online store with our comprehensive e-commerce development services'
        image='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
