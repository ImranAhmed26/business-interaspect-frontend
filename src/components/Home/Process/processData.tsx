import { Search, Lightbulb, Code2, Gauge, Rocket } from 'lucide-react';
import { ProcessStep } from './types';

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your vision and requirements',
    longDescription: (
      <>
        <p className='mb-4'>
          We begin with a deep dive into your business objectives, target
          audience, and project requirements. Our team conducts thorough market
          research and competitive analysis to ensure we're building something
          truly unique.
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
          Based on our discoveries, we craft a comprehensive strategy that
          aligns with your goals. This includes technical architecture, user
          experience design, and a detailed project roadmap.
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
          Our expert developers transform the strategy into reality using
          cutting-edge technologies. We follow agile methodologies with regular
          updates and demonstrations of progress.
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
          Quality is paramount. We conduct thorough testing across multiple
          dimensions to ensure your product performs flawlessly under all
          conditions.
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
          We ensure a smooth deployment and provide ongoing support to help your
          product succeed in the market. Our launch strategy includes monitoring
          and optimization.
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
