import { FaLightbulb } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaHourglassStart } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';
import { MdOutlineGrade } from 'react-icons/md';
import { BsCalendar2Event } from 'react-icons/bs';
import ReadingNewspaper from '../../public/assets/reading-newspaper.png';
import DataAnalyst from '../../public/assets/data-analyst.png';
import CodeTyping from '../../public/assets/code-typing.png';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCloud,
  FaLifeRing,
  FaRocket,
} from 'react-icons/fa';

import { Service } from '@/types/serviceItem';

export const BannerData = {
  title:
    'Build your website with skilled engineers starting at just $40 per hour!',
  subTitle: 'Skilled Developers • Transparent Pricing • Exceptional Results',
  description2:
    'We provide you with top talents for your Web, Mobile, and Custom Software development ensuring scalable software solutions at affordable rates',
  description:
    'At Business Interaspect, we empower SMEs and startups to bring their vision to life',
};

export const HighLightedWords = ['skilled', 'build', '$40'];

export const WorkWithUsData = [
  {
    text: 'Tell us about your needs and big idea',
    iconLight: <FaLightbulb />,
    iconDark: <FaRegLightbulb />,
  },
  {
    text: 'We kick off in 7 days',
    iconLight: <FaHourglassStart />,
    iconDark: <FaHourglassStart />,
  },
  {
    text: 'Meet your team and start building',
    iconLight: <BsPeopleFill />,
    iconDark: <BsPeople />,
  },
  {
    text: 'Weekly updates on the progress',
    iconLight: <BsCalendar2EventFill />,
    iconDark: <BsCalendar2Event />,
  },
  {
    text: 'Highest quality is always ensured',
    iconLight: <MdGrade />,
    iconDark: <MdOutlineGrade />,
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

const featuresData: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'E-commerce, Saas, CRM, ERP, Ed-Tech. Build scalable, user-friendly web applications with cutting-edge technologies tailored to your business needs.',
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: 'Landing Pages & Personal Websites',
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

export default featuresData;
