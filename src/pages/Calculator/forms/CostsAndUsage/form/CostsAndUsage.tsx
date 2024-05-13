import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { CustomInput, CustomText, ManagmentLayout } from '../../../../../components';
import { useCoverageForm } from '../../../hooks';
import CustomDatePicker from '../../../../../components/orgamisms/CustomDatePicker/DatePicker';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { costsAndUsageSchema } from '../schemas/CostsAndUsageSchema'; 
import dayjs, { Dayjs } from 'dayjs';

const CostsAndUsage = () => {
  const { t } = useCoverageForm();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(costsAndUsageSchema), 
  });

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const onSubmit = (data: any) => {
    console.log('Datos a enviar', data); 
    console.log('Fecha seleccionada:', selectedDate);
  };

  const handleDateChange = (date: Dayjs | null) => { 
    if (date) {
      setSelectedDate(date); 
    }
  };

  return (
    <ManagmentLayout
      title={<CustomText texto={t('Costos y usos')} variante={'titulo'} />}
      generalContents={
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                <CustomText texto={t('Contaminante')} variante="subtitulo" styles={{ textAlign: 'justify' }}/>
                <CustomText texto={t('Carbón')} variante="subtitulo" styles={{ textAlign: 'justify' }} />
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                <CustomText texto={t('Fecha de evaluación')} variante="subtitulo" styles={{ textAlign: 'justify' }} mandatory />
                <CustomDatePicker 
                  label={'Ingrese el mes y año'} 
                  views={['month', 'year']} 
                  defaultValue={dayjs()} 
                  onChange={handleDateChange} 
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                <CustomText texto={t('Costo')} variante="subtitulo" mandatory />
                <CustomInput placeholder={t('Ingrese costo')} size="medium" props={register('cost')} />
                {errors.cost && <span>{errors.cost.message}</span>}
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                <CustomText texto={t('Consumo')} variante="subtitulo" mandatory />
                <CustomInput placeholder={t('Ingrese consumo')} size="medium" props={register('usage')} />
                {errors.usage && <span>{errors.usage.message}</span>}
              </Grid>
            </Grid>
            <button type="submit">Submit</button> 
          </form>
        </Box>
      }
    />
  );
};

export default CostsAndUsage;