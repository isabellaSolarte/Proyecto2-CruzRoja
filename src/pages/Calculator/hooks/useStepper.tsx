import { useState } from 'react';

interface StepProps {
  completed: boolean;
  label: string;
  optional: boolean;
  id: number;
}

const useStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepList, setStepList] = useState<StepProps[]>([
    {
      completed: false,
      label: 'Bienvenido',
      optional: false,
      id: 0,
    },
    {
      completed: false,
      label: 'Categorías',
      optional: false,
      id: 1,
    },
    {
      completed: false,
      label: 'Contaminantes',
      optional: false,
      id: 2,
    },
    {
      completed: false,
      label: 'Fuentes',
      optional: false,
      id: 3,
    },
    {
      completed: false,
      label: 'Coberturas',
      optional: false,
      id: 4,
    },
    {
      completed: false,
      label: 'Consumos y Costos',
      optional: false,
      id: 5,
    },
    {
      completed: false,
      label: 'Validación',
      optional: false,
      id: 6,
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

export default useStepper;
