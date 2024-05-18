import { Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import  useCostsForm  from './hooks/useCostsAndUsageForm';
import DoubleInput from './models/DoubleInput';
import { Fragment } from 'react/jsx-runtime';

const CostsForm = () => {
  const {  adaptedSources, handleSubmit, register, onSubmit, errors } = useCostsForm();

  return (
    <ManagmentLayout
      title={<CustomText texto={''} variante={'subtitulo'} />}
      description={<CustomText texto={'A conitnuación ingrese el costo y mes de evaluacion para cada fuente:'} variante={'texto'} />}
      generalContents={
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            {adaptedSources.map((pollutants, index) => (
              <Fragment key={index}>
                <Grid item xs={12} md={6} paddingInlineEnd={10} paddingBlockEnd={5} key={pollutants.id}>
                  <DoubleInput
                    mainLabel={'Fuente:'}
                    labelInput1={'Costo'}
                    labelInput2={'Mes'}
                    title={pollutants.name}
                    propsInput1={{ registerInput1: register(`costs.${index}.cost`) }}
                    propsInput2={{ registerInput2: register(`costs.${index}.month`),defaultValue: pollutants.month }}
                  />
                  {!!errors.costs && !!errors.costs[index]?.cost && (
                    <Grid item xs={12}>
                      <ErrorText error={errors.costs[index]?.cost.message} formErrorKey={'calculator'} />
                    </Grid>
                  )}
                  {!!errors.costs && !!errors.costs[index]?.month && (
                    <Grid item xs={12}>
                      <ErrorText error={errors.costs[index]?.month.message} formErrorKey={'calculator'} />
                    </Grid>
                  )}
                </Grid>
              </Fragment>
            ))}
          </Grid>
          <CustomButton content="Guardar" color={'info'} type={'submit'} />
        </form>
      }
    />
  );
};

export default CostsForm;
