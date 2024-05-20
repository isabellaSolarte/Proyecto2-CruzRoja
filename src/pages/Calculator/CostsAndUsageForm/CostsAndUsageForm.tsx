import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import useCostsForm from './hooks/useCostsAndUsageForm';
import DoubleInput from './models/DoubleInput';
import { Fragment } from 'react/jsx-runtime';

const CostsForm = () => {
  const { adaptedSources, handleSubmit, register, onSubmit, errors, calculator, handleFormSubmit } = useCostsForm();

  useEffect(() => {
    if (calculator.formReference.current) {
      calculator.formReference.current.addEventListener('submit', handleFormSubmit);
    }
    calculator.updateFormHasErrors(false);
  }, [calculator.formReference, handleFormSubmit]);

  return (
    <ManagmentLayout
      title={<CustomText texto={''} variante={'subtitulo'} />}
      description={<CustomText texto={'A continuación ingrese el costo, mes, uso y año de evaluación para cada fuente:'} variante={'texto'} />}
      generalContents={
        <form ref={calculator.formReference} onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            {adaptedSources.map((pollutants, index) => (
              <Fragment key={index}>
                <Grid item xs={12} md={6} paddingInlineEnd={10} paddingBlockEnd={5} key={pollutants.id}>
                  <DoubleInput
                    mainLabel={'Fuente:'}
                    labelInput1={'Costo'}
                    labelInput2={'Mes'}
                    labelInput3={'Uso'}
                    labelInput4={'Año'}
                    title={pollutants.name}
                    propsInput1={{ registerInput1: register(`costs.${index}.cost`) }}
                    propsInput3={{ registerInput3: register(`costs.${index}.usage`) }}
                    propsInput2={{ registerInput2: register(`costs.${index}.month`), defaultValue: pollutants.month }}
                    propsInput4={{ registerInput4: register(`costs.${index}.year`), defaultValue: pollutants.year }}
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
                  {!!errors.costs && !!errors.costs[index]?.usage && (
                    <Grid item xs={12}>
                      <ErrorText error={errors.costs[index]?.usage.message} formErrorKey={'calculator'} />
                    </Grid>
                  )}
                  {!!errors.costs && !!errors.costs[index]?.year && (
                    <Grid item xs={12}>
                      <ErrorText error={errors.costs[index]?.year.message} formErrorKey={'calculator'} />
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
