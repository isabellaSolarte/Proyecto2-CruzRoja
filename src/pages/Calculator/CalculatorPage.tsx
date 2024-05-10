import { Box, Typography } from '@mui/material';
import { CustomButton, CustomStepper } from '../../components';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
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
              type="submit"
            />
          </div>
    </CustomStepper>
  );
};

export default CalculatorPage;