import { Box, Grid } from '@mui/material';
import { CustomInput, CustomText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from '../hooks';

const CostsAndUsage = () => {
  const { t } = useCoverageForm();
  return (
    <ManagmentLayout
      title={<CustomText texto={t('Costos y usos')} variante={'titulo'} />}
      generalContents={
        <Box>   
          <CustomText texto={t('Consumo de carbón')} variante="subtitulo" styles={{textAlign: 'justify'}} /> 
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
            <CustomText texto={t('Costo')} variante="subtitulo" mandatory />
            <CustomInput placeholder={t('Ingrese costo')} size="medium" /> 
            </Grid>
            <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}> 
            <CustomText texto={t('Consumo')} variante="subtitulo" mandatory />
              <CustomInput placeholder={t('Ingrese consumo')} size="medium"/>        
            </Grid>
          </Grid>
        </Box>   
      }
    />
  );
};

export default CostsAndUsage;
