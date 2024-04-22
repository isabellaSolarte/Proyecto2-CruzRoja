import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '../../Atoms';
import CustomText from '../../Atoms/CustomText/CustomText';

export interface StepProps {
  completed: boolean;
  label: string;
  optional: boolean;
  id: number;
}

interface CustomStepperProps {
  stepsData: StepProps[];
  activeStep: number;
  // eslint-disable-next-line no-unused-vars
  setActiveStep: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  completeStep: (stepId: number) => void;
}

const CustomStepper = ({
  stepsData,
  activeStep,
  setActiveStep,
  children,
  completeStep,
}: CustomStepperProps) => {
  const [skipped, setSkipped] = useState(new Set<number>());
  const { t } = useTranslation('commons');

  const isStepOptional = (stepId: number) => {
    const currentStep = stepsData.find(stepData => stepData.id === stepId);
    if (currentStep) return currentStep.optional;
    return false;
  };

  const isStepSkipped = (step: number) => {
    const currentStep = stepsData.find(stepData => stepData.id === step);
    if (currentStep) return skipped.has(currentStep.id);
    return false;
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    completeStep(activeStep);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {stepsData.map((step, index) => {
          const labelProps: { optional?: ReactNode } = {};
          if (step.optional)
            labelProps.optional = (
              <CustomText texto={t('components.stepper.optional')} variante="pequeño" />
            );

          if (isStepSkipped(index)) step.completed = false;

          return (
            <Step
              key={step.id}
              completed={step.completed}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'success.main', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                  color: 'grey.500', // Just text label (COMPLETED)
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'info.main', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                  color: 'common.white', // Just text label (ACTIVE)
                },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: '#fff', // circle's number (ACTIVE)
                },
              }}
            >
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ paddingBlock: 4 }}>{children}</Box>

      {activeStep === stepsData.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}
          >
            <CustomButton
              content={t('components.stepper.back')}
              onClick={handleBack}
              color="warning"
              disabled={activeStep === 0}
            />

            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                {t('components.stepper.skip')}
              </Button>
            )}

            {activeStep === stepsData.length - 1 ? (
              <CustomButton
                content={t('components.stepper.end')}
                onClick={handleNext}
                color="info"
              />
            ) : (
              <CustomButton
                content={t('components.stepper.next')}
                onClick={handleNext}
                color="info"
              />
            )}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default CustomStepper;
