'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/Interface/Container';
import { Section } from '@/components/Interface/Section';
import { ProcessCard } from './ProcessCard';
import { ProcessDetails } from './ProcessDetails';
import { processSteps } from './processData';
import SectionHeader from '@/components/Interface/Typography/SectionHeader';

const Process = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleClick = (index: any) => {
    setActiveStepIndex(index);
    console.log('active step', activeStepIndex);
  };

  const handleStartBuilding = () => {
    console.log('Clicked Me !!');
  };

  return (
    <>
      <Container>
        <SectionHeader
          description={
            'A refined process that consistently delivers exceptional results'
          }
          title={'Partnering with us is simple'}
        />

        <div className='grid lg:grid-cols-5 gap-4 mb-8'>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.title}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
              isActive={index === activeStepIndex}
              onClick={() => setActiveStepIndex(index)}
            />
          ))}
        </div>

        <ProcessDetails activeStep={processSteps[activeStepIndex]} />
      </Container>
    </>
  );
};

export default Process;
