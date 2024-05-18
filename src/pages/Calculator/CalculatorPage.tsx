import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CustomButton, CustomStepper, CustomText } from '../../components';
import { CoverageForm } from './CoverageForm';
import { useCalculatorHook, useStepper } from './hooks';
import { useEffect } from 'react';
import CostsAndUsageForm from './CostsAndUsageForm/CostsAndUsageForm';

const CalculatorPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { currentStep, stepList, handleNextStep, handleStepBack } = useStepper();
  const { fetchCategories, t } = useCalculatorHook();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClickNext = () => {
    switch (currentStep) {
      case 2:
       // funcionPaso2();
        break;
      case 3:
        // funcionPaso3();
        break;
      case 4:
        // funcionPaso4();
        break;
      case 5:
       //  funcionPaso5();
        break;
      case 6:
       //  funcionPaso6();
        break;
      case 7:
       //  funcionPaso7();
        break;
      default:
        handleNextStep();
        break;
    }
  };

  return (
    <CustomStepper stepsData={stepList} activeStep={currentStep}>
      {currentStep === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid item xs={12} sm={8} md={6} lg={4} textAlign="center">
            <img
              src="/icono-calculadora.png"
              alt="Calculadora"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
            <CustomText texto={t('pageTitles.calculator')} variante={'titulo'} />
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
          <Grid item xs={12} textAlign="center">
            <CustomText texto={stepList[currentStep].label} variante={'titulo'} />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <div>
              {currentStep === 2 && <div> </div>}
              {currentStep === 3 && <div> </div>}
              {currentStep === 4 && <CoverageForm />}
              {currentStep === 5 && <CostsAndUsageForm />}
              {currentStep === 6 && <div> </div>}
              {currentStep === 7 && <div> </div>}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="space-between"
            sx={{ width: '100%', padding: { xs: '0 5%', md: '0 20%' } }}
          >
            <CustomButton
              variant="contained"
              color="primary"
              content={t('generalButtonText.back')}
              onClick={handleStepBack}
            />
            {!isSmallScreen && currentStep < stepList.length - 1 && (
              <CustomButton
                variant="contained"
                color="info"
                content={t('components.stepper.next')}
                onClick={handleClickNext}
              />
            )}
          </Grid>
        </div>
      )}
    </CustomStepper>
  );
};

export default CalculatorPage;
