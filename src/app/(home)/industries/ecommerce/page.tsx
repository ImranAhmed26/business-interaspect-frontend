import IndustryHero from '@/components/Home/Industries';
import EcomImage from '../../../../../public/assets/industries/ecom-01.jpg';

const page = () => {
  return (
    <main className='min-h-screen bg-violet-0 w-full lg:min-w-[1200px]'>
      <IndustryHero
        title='E-commerce Solutions'
        description='Build and scale your online store with our comprehensive e-commerce development services'
        // image='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
        image={EcomImage}
      />
    </main>
  );
};

export default page;
