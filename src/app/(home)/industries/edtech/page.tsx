import IndustryHero  from '@/components/Home/Industries';

 const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      <IndustryHero
        title='EdTech Solutions'
        description='Build the future of education with innovative digital platforms'
        image='https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
      />
    </main>
  );
};

export default page;
