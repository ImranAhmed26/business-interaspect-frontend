import IndustryHero, {
  HousingComponentTwo,
} from '@/components/Home/Industries';
import Picture from '../../../../../public/assets/industries/real-estate-05.jpg';
import Picture2 from '../../../../../public/assets/industries/real-estate-02.jpg';
import Picture3 from '../../../../../public/assets/industries/real-estate-03.jpg';
import Picture4 from '../../../../../public/assets/industries/real-estate-04.jpg';
import { HousingComponent } from '@/components/Home/Industries';

const data = [
  {
    name: 'Landing Pages',
    desc: '',
    image: Picture3,
  },
  {
    name: 'Property Management Apps',
    desc: '',
    image: Picture4,
  },
  {
    name: 'Real Estate Marketplaces',
    desc: '',
    image: Picture2,
  },
];

const page = () => {
  return (
    <main className='min-h-screen bg-background'>
      {/* <IndustryHero
        title='Real Estate Solutions'
        description='Transform your real estate business with modern digital solutions with tailored digital solutions designed to meet your unique goals. From intuitive landing pages to robust property management systems and dynamic marketplaces, we bring your vision to life.'
        image='https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
      /> */}
      <HousingComponent
        title='Revolutionize Real Estate with Digital Solutions'
        description='Elevate your real estate business with cutting-edge digital tools. From sleek landing pages to property management platforms and marketplaces, we deliver solutions that drive growth and success.'
        mainText={'Lets build your dream home'}
        subText='Landing Pages • Property Management Apps • Real Estate Marketplaces'
        image={Picture}
      />
      <HousingComponentTwo data={data} />
    </main>
  );
};

export default page;
