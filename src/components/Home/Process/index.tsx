'use client';
import { useState } from 'react';
import { Container } from '@/components/Interface/Container';
import { ProcessCard } from './ProcessCard';
import { ProcessDetails } from './ProcessDetails';
import { processSteps } from '@/constants/landingPage';

import SectionHeader from '@/components/Interface/Typography/SectionHeader';

const Process = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

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
