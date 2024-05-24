import { Box, Grid } from '@mui/material';
import { CustomButton, CustomStepper, CustomText, ManagmentLayout } from '../../components';
import { CoverageForm, useCoverageForm } from './CoverageForm';
import { useCalculatorHook, useStepper } from './hooks';
import CostsAndUsageForm from './CostsAndUsageForm/CostsAndUsageForm';
import { ValidateForm } from './ValidateDataForm';
import { SourcesForm } from './SourcesForm';
import PollutionTypeForm from './PollutionTypeForm/PollutionTypeForm';
import { CategoriesForm } from './CategoriesForm/forms';

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
    console.log('Current step:', currentStep);
    console.log('Form has errors:', calculator.formHasErrors);
  
    const stepsFunctions: { [key: number]: () => void } = {
      1: () => {
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
      2: () => {
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
      3: () => {
        handleCoverageFormData();
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
      4: () => {
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
      5: () => {
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
      6: () => {
        if (!calculator.formHasErrors) {
          handleNextStep();
        }
      },
    };
  
    if (stepsFunctions[currentStep]) {
      stepsFunctions[currentStep]();
    } else {
      handleNextStep();
    }
  };

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.calculator')} variante="titulo" />}
      generalContents={
        <CustomStepper stepsData={stepList} activeStep={currentStep}>
          {currentStep === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
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
                  {currentStep === 1 && <div> </div>}
                  {currentStep === 2 && <div> </div>}
                  {currentStep === 3 && <SourcesDataForm sources={sourcesDictionaryPrueba2} />}
                  {currentStep === 4 && <CoverageForm />}
                  {currentStep === 5 && <CostsAndUsageForm />}
                  {currentStep === 6 && <div> </div>}
                </Grid>
              </Grid>
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
                {currentStep < stepList.length - 1 && (
                  <CustomButton
                    variant="contained"
                    color="info"
                    content={t('components.stepper.next')}
                    onClick={handleClick}
                  />
                )}
              </Box>
            </Box>
          )}
        </CustomStepper>
      }
    />
  );
};

export default CalculatorPage;
