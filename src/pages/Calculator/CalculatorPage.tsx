import { Box, Typography } from '@mui/material';
import { CustomButton, CustomStepper } from '../../components';
import { CoverageForm } from './CoverageForm';
import useCalculator from './hooks/useCalculator';

const CalculatorPage = () => {
  const { currentStep, stepList, handleNextStep, handleStepBack } = useCalculator();

  return (
    <CustomStepper stepsData={stepList} activeStep={currentStep}>
      {currentStep === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ width: '50%', textAlign: 'center' }}>
            <img
              src="/icono-calculadora.png"
              alt="Calculadora"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Calculadora de huella de carbono
          </Typography>
          <CustomButton
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
            content={'Iniciar'}
            onClick={handleNextStep}
          />
        </div>
      )}
      {currentStep === 1 && <CoverageForm sources={[]} />}
    </CustomStepper>
  );
};

export default CalculatorPage;
