import { useContext } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomInput, CustomSelect, CustomText, ManagmentLayout } from '../../../components';
import { costsAndUsageSchema } from './Schemas/CostsAndUsageSchema';
import CalculatorContext from '../../../contexts/CalculatorForm/CalculatorContext';

const options = [
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
  { value: 12, label: 'Diciembre' },
];

const CostsAndUsageForm = () => {
  const { getCalculatorState, updateCalculatorState } = useContext(CalculatorContext);
  const categories = getCalculatorState();

  const { control, handleSubmit} = useForm({
    resolver: yupResolver(costsAndUsageSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    updateCalculatorState(data.categories);
  };

  return (
    <ManagmentLayout
      title={<CustomText texto=" " variante="titulo" />}
      generalContents={
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {categories.map((category, catIdx) => (
            <div key={category.id}>
              <CustomText texto={`Categoría: ${category.name}`} variante="subtitulo" />
              {category.pollutans.map((pollutant, polIdx) => (
                <div key={pollutant.id}>
                  <CustomText texto={`Contaminante: ${pollutant.name}`} variante="subtitulo" />
                  <Grid container spacing={2}>
                    {pollutant.sources.map((source, srcIdx) => (
                      <Grid item xs={12} sm={6} key={source.id}>
                        <CustomText texto={`Nombre de la Fuente: ${source.name}`} variante="texto" />
                        <Controller
                          name={`categories[${catIdx}].pollutans[${polIdx}].sources[${srcIdx}].cost`}
                          control={control}
                          render={({ field}) => (
                            <>
                              <CustomInput
                                {...field}
                                placeholder="Ingrese costo"
                                size="large"
                              />
                            </>
                          )}
                        />
                        <Controller
                          name={`categories[${catIdx}].pollutans[${polIdx}].sources[${srcIdx}].month`}
                          control={control}
                          render={({ field }) => (
                            <CustomSelect
                              {...field}
                              options={options}
                              label="Mes"
                              labelId={`categories[${catIdx}].pollutans[${polIdx}].sources[${srcIdx}].month`}
                              control={control}
                              disabled={false}
                              readOnly={false}
                              required={true}
                              sx={{ backgroundColor: '#FCFCFC', marginTop: '8px', marginBottom: '8px' }}
                            />
                          )}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))}
            </div>
          ))}
          <Button type="submit" variant="contained" color="primary" > 
            Guardar
          </Button>
        </Box>
      }
    />
  );
};

export default CostsAndUsageForm;
