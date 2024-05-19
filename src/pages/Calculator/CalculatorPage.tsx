import { Box, Grid } from '@mui/material';
import { CustomButton, CustomStepper, CustomText } from '../../components';
import { CoverageForm, useCoverageForm } from './CoverageForm';
import { useCalculatorHook, useStepper } from './hooks';
import { useEffect } from 'react';
import CostsAndUsageForm from './CostsAndUsageForm/CostsAndUsageForm';
import { SourcesDataForm } from './Sources/Form';
import { sourcesDictionaryPrueba2 } from './Sources/Form/sourcesDictionary';
import { CategoriesForm } from './forms';

const CalculatorPage = () => {
  const { currentStep, stepList, handleNextStep, handleStepBack } = useStepper();
  const { fetchCategories, calculator, t } = useCalculatorHook();
  const { handleCoverageFormData } = useCoverageForm();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log('calculator.formHasErrors', calculator.formHasErrors);
  }, [calculator.formHasErrors]);

  const handleClick = () => {
    const stepsFunctions: { [key: number]: () => void } = {
      1: () => {
        // funciónParaPaso1();
        handleNextStep();
      },
      2: () => {
        // funciónParaPaso2();
        handleNextStep();
      },
      3: () => {
        // funciónParaPaso3();
        handleNextStep();
      },
      4: () => {
        handleCoverageFormData();
        //handleNextStep();
      },
      5: () => {
        // funciónParaPaso5();
        handleNextStep();
      },
      6: () => {
        // funciónParaPaso6();
        handleNextStep();
      },
      7: () => {
        // funciónParaPaso7();
        handleNextStep();
      },
    };

    if (stepsFunctions[currentStep]) {
      stepsFunctions[currentStep]();
    } else {
      handleNextStep();
    }
  };

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
            content={t('generalButtonText.start')}
            onClick={handleNextStep}
          />
        </div>
      )}
      {currentStep > 0 && (
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <div>
              {currentStep === 1 && <CategoriesForm />}
              {currentStep === 2 && <div> </div>}
              {currentStep === 3 && <CoverageForm />}
              {currentStep === 4 && <CostsAndUsageForm />}
              {currentStep === 5 && <div> </div>}
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
              content={t('generalButtonText.back')}
              onClick={handleStepBack}
            />
            {currentStep < stepList.length - 1 && (
              <CustomButton
                variant="contained"
                color="info"
                content={t('components.stepper.next')}
                onClick={handleClick}
              />
            )}
          </Box>
        </div>
      )}
    </CustomStepper>
  );
};

export default CalculatorPage;
