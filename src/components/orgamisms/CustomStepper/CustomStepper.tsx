import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
  children: ReactNode;
}

const CustomStepper = ({ stepsData, activeStep, children }: CustomStepperProps) => {
  const { t } = useTranslation('commons');

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {stepsData.map(step => {
          const labelProps: { optional?: ReactNode } = {};
          if (step.optional)
            labelProps.optional = (
              <CustomText texto={t('components.stepper.optional')} variante="pequeño" />
            );

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
    </Box>
  );
};

export default CustomStepper;
