import IndustryHero  from '@/components/Home/Industries';

 const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='Healthcare Solutions'
        description='Secure and compliant digital solutions for modern healthcare providers'
        image='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
