// import { FaLightbulb } from 'react-icons/fa';
// import { FaRegLightbulb } from 'react-icons/fa';
// import { FaHourglassStart } from 'react-icons/fa';
// import { BsPeopleFill } from 'react-icons/bs';
// import { BsPeople } from 'react-icons/bs';
// import { BsCalendar2EventFill } from 'react-icons/bs';
// import { MdGrade } from 'react-icons/md';
// import { MdOutlineGrade } from 'react-icons/md';
// import { BsCalendar2Event } from 'react-icons/bs';
import ReadingNewspaper from '../../public/assets/reading-newspaper.png';
import DataAnalyst from '../../public/assets/data-analyst.png';
import CodeTyping from '../../public/assets/code-typing.png';
import ProjectOnePrimary from '../../public/assets/projects/project-1.1.png';
import ProjectOneSecondary from '../../public/assets/projects/project-1.2.png';
import ProjectTwoPrimary from '../../public/assets/projects/project-2.1.png';
import ProjectTwoSecondary from '../../public/assets/projects/project-2.2.png';
import ProjectThreePrimary from '../../public/assets/projects/project-3.2.png';
import ProjectThreeSecondary from '../../public/assets/projects/project-3.3.png';
import { Search, Lightbulb, Code2, Gauge, Rocket } from 'lucide-react';
import { ProcessStep } from '@/types/Home/processStep';

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCloud,
  FaLifeRing,
  FaRocket,
} from 'react-icons/fa';

import { Service } from '@/types/Home/serviceItem';
import { projectItem } from '@/types/projectItem';

export const BannerData = {
  title:
    'Build your website with world-class developers starting at just $40 per hour!',
  subTitle: 'Skilled Developers • Transparent Pricing • Exceptional Results',
  description2:
    'We provide you with top talents for your Web, Mobile, and Custom Software development ensuring scalable software solutions at affordable rates',
  description: `Teaming up with world-class developers to co-create a winning product. At Business Interaspect, we empower SMEs and startups to bring their vision to life. `,
};

export const HighLightedWords = ['skilled', 'world-class', 'build', '$40'];

// export const ProcessData = [
//   {
//     text: 'Tell us about your needs and big idea',
//     iconLight: <FaLightbulb />,
//     iconDark: <FaRegLightbulb />,
//   },
//   {
//     text: 'We kick off in 7 days',
//     iconLight: <FaHourglassStart />,
//     iconDark: <FaHourglassStart />,
//   },
//   {
//     text: 'Meet your team and start building',
//     iconLight: <BsPeopleFill />,
//     iconDark: <BsPeople />,
//   },
//   {
//     text: 'Weekly updates on the progress',
//     iconLight: <BsCalendar2EventFill />,
//     iconDark: <BsCalendar2Event />,
//   },
//   {
//     text: 'Highest quality is always ensured',
//     iconLight: <MdGrade />,
//     iconDark: <MdOutlineGrade />,
//   },
// ];

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your vision and requirements',
    longDescription: (
      <>
        <p className='mb-4'>
          {`We begin with a deep dive into your business objectives, target
          audience, and project requirements. Our team conducts thorough market
          research and competitive analysis to ensure we're building something
          truly unique.`}
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700/70 dark:text-white/70'>
          <li>Stakeholder interviews</li>
          <li>Market & competitor analysis</li>
          <li>User research & personas</li>
          <li>Technical requirements gathering</li>
        </ul>
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Planning the perfect solution',
    longDescription: (
      <>
        <p className='mb-4'>
          {`    Based on our discoveries, we craft a comprehensive strategy that
          aligns with your goals. This includes technical architecture, user
          experience design, and a detailed project roadmap.`}
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700/70 dark:text-white/70'>
          <li>Technical architecture design</li>
          <li>UX/UI wireframing</li>
          <li>Project timeline planning</li>
          <li>Resource allocation</li>
        </ul>
      </>
    ),
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Bringing ideas to life',
    longDescription: (
      <>
        <p className='mb-4'>
          {` Our expert developers transform the strategy into reality using
          cutting-edge technologies. We follow agile methodologies with regular
          updates and demonstrations of progress.`}
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700/70 dark:text-white/70'>
          <li>Agile development process</li>
          <li>Regular code reviews</li>
          <li>Continuous integration</li>
          <li>Weekly progress updates</li>
        </ul>
      </>
    ),
  },
  {
    icon: Gauge,
    title: 'Testing',
    description: 'Ensuring perfect execution',
    longDescription: (
      <>
        <p className='mb-4'>
          {`   Quality is paramount. We conduct thorough testing across multiple
          dimensions to ensure your product performs flawlessly under all
          conditions.`}
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700/70 dark:text-white/70'>
          <li>Automated testing suite</li>
          <li>Performance optimization</li>
          <li>Security auditing</li>
          <li>Cross-platform testing</li>
        </ul>
      </>
    ),
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Taking off to success',
    longDescription: (
      <>
        <p className='mb-4'>
          {`  We ensure a smooth deployment and provide ongoing support to help your
          product succeed in the market. Our launch strategy includes monitoring
          and optimization.`}
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700/70 dark:text-white/70'>
          <li>Staged deployment process</li>
          <li>Performance monitoring</li>
          <li>User feedback collection</li>
          <li>Continuous optimization</li>
        </ul>
      </>
    ),
  },
];

export const ImpactData = [
  {
    title: 'Focus 100% on Growing Your Business',
    subTitle: 'Leave the tech to us.',
    description:
      'We handle all the technical complexities, giving you more time to focus on your business’s growth and success.',
    src: ReadingNewspaper,
    url: '',
    color: '#BBACAF',
  },
  {
    title: 'Custom Solutions to Bring Your Vision to Life',
    subTitle: 'Expertise that delivers results.',
    description:
      'We turn your ideas from concept to reality using cutting-edge solutions designed to solve your challenges and achieve your unique goals.',
    src: DataAnalyst,
    url: 'https://example.com/your-vision',
    color: '#D4A5A6',
  },
  {
    title: 'Modern tech that empowers and scales seamlessly',
    subTitle: 'Innovation that scales',
    description:
      'We use cutting-edge technologies and programming languages that not only support your long-term goals but also scale rapidly as your business grows, ensuring you stay ahead in a competitive market',
    src: CodeTyping,
    url: 'https://example.com/tech-that-empowers',
    color: '#C8D6A5',
  },
];

export const serviceData: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'E-commerce, Saas, CRM, ERP, Ed-Tech. Build scalable, user-friendly web applications with cutting-edge technologies tailored to your business needs.',
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: 'Landing Pages',
    description:
      'Craft custom landing pages and personal websites designed to captivate audiences, highlight your brand, and drive conversions with modern design and responsiveness.',
    icon: <FaRocket />,
  },
  {
    id: 3,
    title: 'Mobile Application',
    description:
      'Create seamless mobile experiences with custom apps designed for iOS and Android platforms, ensuring broad reach and engagement.',
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description:
      'Visually stunning, responsive websites designed with attention to detail to enhance your brand’s online presence and user engagement.',
    icon: <FaPalette />,
  },
  {
    id: 5,
    title: 'Cloud Services',
    description:
      'Cloud solutions designed for flexibility, cost-efficiency, and scalability, with a focus on data security and performance.',
    icon: <FaCloud />,
  },
  {
    id: 6,
    title: 'Ongoing Support',
    description:
      'Get continuous assistance and maintenance to ensure your applications run smoothly and remain up-to-date with evolving needs.',
    icon: <FaLifeRing />,
  },
];

export const projectData: projectItem[] = [
  {
    title: 'Book MOT',
    type: 'Appointment Management',
    subTitle: 'MOT test and service center',
    description: `Book MOT is a comprehensive appointment management platform designed specifically for MOT testing and vehicle servicing. It offers users an intuitive way to schedule MOT tests, regular car services, and other essential vehicle inspections. We developed a user-friendly solution that allows both vehicle owners and service centers to schedule inspections with ease, ensuring safety and compliance.`,
    imagePrimary: ProjectOnePrimary,
    imageSecondary: ProjectOneSecondary,
    color: 'green',
    link: 'https://www.bookmot.com',
  },
  {
    title: 'GPRC',
    subTitle: 'Global plastic recycling council',
    type: 'Trading Application',
    description: `A platform designed to promote sustainable practices and collaboration within the plastic recycling industry. It connects stakeholders, including manufacturers, recyclers, and environmental advocates, aiming to reduce plastic waste and enhance the global recycling effort. We built a solution that facilitates collaboration, tracks recycled materials, and promotes sustainable practices for a cleaner, circular economy.`,
    imagePrimary: ProjectTwoPrimary,
    imageSecondary: ProjectTwoSecondary,
    color: 'blue',
    link: 'https://www.gprc.us',
  },
  {
    title: 'AutoFella',
    subTitle: 'Tyre buying application',
    type: 'Marketplace',
    description: `An innovative marketplace for purchasing tyres, offering customers a convenient way to browse and buy the best tyres for their vehicles. We designed an intuitive platform that seamlessly connects customers with fitting centers, streamlining the buying, selling and fitting process for a better overall experience.`,
    imagePrimary: ProjectThreePrimary,
    imageSecondary: ProjectThreeSecondary,
    color: 'orange',
    link: 'https://www.autofella.co.uk',
  },
];
