import IndustryHero  from '@/components/Home/Industries';

 const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='Service Business Solutions'
        description='Streamline your service-based business with custom digital tools'
        image='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
