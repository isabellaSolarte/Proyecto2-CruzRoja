import { Box, Grid } from '@mui/material';
import { CustomInput, CustomSelect, CustomText, ManagmentLayout } from '../../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { costsAndUsageSchema } from './Schemas/CostsAndUsageSchema';
import { OptionSelector, PollutantCostModel } from '../../../models';
import useCostsAndUsageForm from './hooks/useCostsAndUsageForm'; // Importar el nuevo hook

const options: OptionSelector[] = [
  { value: 1, label: 'Enero' },
  { value: 2, label: 'Febrero' },
  { value: 3, label: 'Marzo' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Mayo' },
  { value: 6, label: 'Junio' },
  { value: 7, label: 'Julio' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Septiembre' },
  { value: 10, label: 'Octubre' },
  { value: 11, label: 'Noviembre' },
  { value: 12, label: 'Diciembre' }
];

const CostsAndUsageForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<PollutantCostModel>({ 
    resolver: yupResolver(costsAndUsageSchema), 
  });

  const onSubmit = (data: PollutantCostModel) => {
    console.log('Datos a enviar', data); 
  };

  return (
    <ManagmentLayout
      title={<CustomText texto={' '} variante={'titulo'} />}
      generalContents={
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                <CustomText texto={'Costo'} variante="subtitulo" mandatory />
                <CustomInput placeholder={'Ingrese costo'} size="medium" props={register('cost')} />
                {errors.cost && <span>{errors.cost.message}</span>}
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}> 
                <CustomText texto={'Mes de evaluación'} variante="subtitulo" mandatory />             
                <CustomSelect
                  options={options}
                  label={'Mes'} 
                  labelId="month" 
                  control={control} 
                  sx={{ backgroundColor: '#FCFCFC'}}
                  disabled={false}
                  error={!!errors.month} 
                  readOnly={false}
                  required={true}
                />
              </Grid>
            </Grid>
            <button type="submit">aceptar</button>
          </form>
        </Box>
      }
    />
  );
};

export default CostsAndUsageForm;
