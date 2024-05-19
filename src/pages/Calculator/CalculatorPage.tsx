import { Box } from '@mui/material';
import { CustomButton, CustomStepper, CustomText } from '../../components';
import { CoverageForm } from './CoverageForm';
import { useCalculatorHook, useStepper } from './hooks';
import { useEffect } from 'react';
import CostsAndUsageForm from './CostsAndUsageForm/CostsAndUsageForm';
import { SourcesForm } from './SourcesForm';

const CalculatorPage = () => {
  const { currentStep, stepList, handleNextStep, handleStepBack } = useStepper();
  const { fetchCategories, t } = useCalculatorHook();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CustomStepper stepsData={stepList} activeStep={currentStep}>
      {currentStep === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ width: '20%', textAlign: 'center' }}>
            <img
              src="/icono-calculadora.png"
              alt="Calculadora"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
          <CustomText texto={t('commons.Calculadora de huella de carbono')} variante={'titulo'} />
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
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          <Box sx={{ width: '50%', textAlign: 'center' }}>
            <CustomText texto={stepList[currentStep].label} variante={'titulo'} />
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <div>
              {currentStep === 2 && <div> </div>}
              {currentStep === 3 && <SourcesForm />}
              {currentStep === 4 && <CoverageForm />}
              {currentStep === 5 && <CostsAndUsageForm />}
              {currentStep === 6 && <div> </div>}
              {currentStep === 7 && <div> </div>}
            </div>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 20%',
            }}
          >
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
