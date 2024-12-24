import { FaLightbulb } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaHourglassStart } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';
import { MdOutlineGrade } from 'react-icons/md';
import { BsCalendar2Event } from 'react-icons/bs';

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
