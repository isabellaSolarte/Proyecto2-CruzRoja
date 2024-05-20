import { Box, Grid } from '@mui/material';
import { CustomButton, CustomStepper, CustomText, SimpleLayout } from '../../components';
import { CoverageForm } from './CoverageForm';
import { useCalculatorHook, useStepper } from './hooks';
import { useEffect } from 'react';
import CostsAndUsageForm from './CostsAndUsageForm/CostsAndUsageForm';
import { ValidateForm } from './ValidateDataForm';
import { CategoriesForm } from './forms';
import { sourcesDictionaryPrueba2 } from './Sources/Form/sourcesDictionary';
import { SourcesDataForm } from './Sources/Form';

const CalculatorPage = () => {
  const { currentStep, stepList, handleNextStep, handleStepBack } = useStepper();
  const { fetchCategories, t } = useCalculatorHook();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <SimpleLayout>
      <CustomStepper stepsData={stepList} activeStep={currentStep}>
        {currentStep === 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ width: { xs: '50%', md: '20%' }, textAlign: 'center' }}>
              <img
                src="/icono-calculadora.png"
                alt="Calculadora"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <CustomText texto={t('pageTitles.calculator')} variante={'titulo'} />
            <CustomButton
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              content={t('generalButtonText.start')}
              onClick={handleNextStep}
            />
          </Box>
        )}
        {currentStep > 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              padding: { xs: '0 10%', md: '0 20%' },
            }}
          >
            <Grid container spacing={2} sx={{ width: '100%', textAlign: 'center' }}>
              <Grid item xs={12}>
                {currentStep === 1 && (
                  <CategoriesForm nextStep={handleNextStep} stepBack={handleStepBack} />
                )}
                {currentStep === 2 && (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 3,
                    }}
                  >
                    <CustomButton
                      variant="contained"
                      color="primary"
                      content={t('generalButtonText.back')}
                      onClick={handleStepBack}
                    />

                    <CustomButton
                      variant="contained"
                      color="info"
                      content={t('components.stepper.next')}
                      onClick={handleNextStep}
                    />
                  </Box>
                )}
                {currentStep === 3 && (
                  <>
                    <SourcesDataForm sources={sourcesDictionaryPrueba2} />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 3,
                      }}
                    >
                      <CustomButton
                        variant="contained"
                        color="primary"
                        content={t('generalButtonText.back')}
                        onClick={handleStepBack}
                      />

                      <CustomButton
                        variant="contained"
                        color="info"
                        content={t('components.stepper.next')}
                        onClick={handleNextStep}
                      />
                    </Box>
                  </>
                )}

                {currentStep === 4 && (
                  <CoverageForm nextStep={handleNextStep} stepBack={handleStepBack} />
                )}
                {currentStep === 5 && (
                  <CostsAndUsageForm nextStep={handleNextStep} stepBack={handleStepBack} />
                )}
                {currentStep === 6 && (
                  <ValidateForm nextStep={handleNextStep} stepBack={handleStepBack} />
                )}
              </Grid>
            </Grid>
          </Box>
        )}
      </CustomStepper>
    </SimpleLayout>
  );
};

export default CalculatorPage;
