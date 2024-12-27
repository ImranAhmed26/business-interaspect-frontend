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

export const BannerConst = {
  title:
    'Build your website with skilled engineers starting at just $40 per hour!',
  subTitle: 'Skilled Developers • Transparent Pricing • Exceptional Results',
  description2:
    'We provide you with top talents for your Web, Mobile, and Custom Software development ensuring scalable software solutions at affordable rates',
  description:
    'At Business Interaspect, we empower SMEs and startups to bring their vision to life',
};

export const HighLightedWords = ['skilled', 'build', '$40'];

export const WorkWithUsPoints = [
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

// export const StackedCardConst = [
//   { name: 'Slide 1', color: ' bg-amber-400 ', desc: '' },
//   { name: 'Slide 2', color: ' bg-sky-400 ', desc: '' },
//   { name: 'Slide 3', color: 'bg-green-400', desc: '' },
//   { name: 'Slide 4', color: 'bg-indigo-400', desc: '' },
//   { name: 'Slide 5', color: 'bg-rose-400', desc: '' },
// ];

export const StackedCardConst = [
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
    //description:
    // 'We empower your business using top of the line technologies like React, Node JS, C#, Django and AWS that support you in the long term and scale rapidly as your business grows with time',
    description:
      'Harness the power of modern technologies to scale your business efficiently and stay ahead in a competitive market.',
    src: CodeTyping,
    url: 'https://example.com/tech-that-empowers',
    color: '#C8D6A5',
  },
];
