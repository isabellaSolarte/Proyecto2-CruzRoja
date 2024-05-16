import { Box, Typography } from '@mui/material';
import { CustomButton, CustomStepper } from '../../components';
import useCalculatorSteps from './hooks/useCalculator'; // Asegúrate de ajustar la ruta según la ubicación del hook
import { CoverageForm } from './CoverageForm';

const CalculatorPage = () => {
  const { currentStep, stepList, handleNextStep, handleStepBack } = useCalculatorSteps();

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
      {currentStep > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Box sx={{ width: '50%', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              {stepList[currentStep].label}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <div>
              {currentStep === 2 && <div> </div>}
              {currentStep === 3 && <div> </div>}
              {currentStep === 4 && <div> <CoverageForm sources={[]} /> </div>}
              {currentStep === 5 && <div>  </div>}
              {currentStep === 6 && <div> </div>}
              {currentStep === 7 && <div> </div>}
            </div>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 20%' }}>
            <CustomButton
              variant="contained"
              color="primary"
              content={'Atrás'}
              onClick={handleStepBack}
            />
            {currentStep < stepList.length - 1 && (
              <CustomButton
                variant="contained"
                color="info"
                content={'Siguiente'}
                onClick={handleNextStep}
              />
            )}
          </Box>
        </div>
      )}
    </CustomStepper>
  );
};

export default CalculatorPage;
