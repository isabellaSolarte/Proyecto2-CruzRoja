import { useState } from 'react';

interface StepProps {
  completed: boolean;
  label: string;
  optional: boolean;
  id: number;
}

const useCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepList, setStepList] = useState<StepProps[]>([
    {
      completed: false,
      label: 'Inicio',
      optional: false,
      id: 0,
    },
    {
      completed: false,
      label: 'Paso 1',
      optional: false,
      id: 1,
    },
  ]);

  const handleNextStep = () => {
    if (currentStep < stepList.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleStepBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleCompleteStep = (stepId: number) => {
    const newStepList = stepList.map(step => {
      if (step.id === stepId) return { ...step, completed: true };
      return step;
    });
    setStepList(newStepList);
  };

  return {
    currentStep,
    stepList,
    handleNextStep,
    handleStepBack,
    handleCompleteStep,
    setCurrentStep,
  };
};

export default useCalculator;
