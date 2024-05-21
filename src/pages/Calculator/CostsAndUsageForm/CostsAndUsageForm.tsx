import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import useCostsForm from './hooks/useCostsAndUsageForm';
import DoubleInput from './models/DoubleInput';
import { Fragment } from 'react/jsx-runtime';

interface CostsFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const CostsForm = ({ nextStep, stepBack }: CostsFormProps) => {
  const { adaptedSources, handleSubmit, register, onSubmit, errors } = useCostsForm(nextStep);

  return (
    <Box>
      <CustomText texto={'A continuación ingrese el costo y mes de evaluacion para cada fuente:'} variante={'texto'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          {adaptedSources.map((pollutants, index) => (
            <Fragment key={index}>
              <Grid item xs={12} md={6} paddingInlineEnd={10} paddingBlockEnd={5} key={pollutants.id}>
                <DoubleInput
                  mainLabel={'Fuente:'}
                  labelInput1={'Costo'}
                  labelInput2={'Mes'}
                  labelInput3={'Consumo'}
                  labelInput4={'Año'}
                  title={pollutants.name}
                  propsInput1={{ registerInput1: register(`costs.${index}.cost`) }}
                  propsInput2={{ registerInput2: register(`costs.${index}.month`), defaultValue: pollutants.month }}
                  propsInput3={{ registerInput3: register(`costs.${index}.usage`) }}
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
            content={'Volver'}
            onClick={stepBack}
          />
          <CustomButton
            variant="contained"
            color="info"
            content={'Siguiente'}
            type="submit"
          />
        </Box>
      </form>
    </Box>
  );
};

export default CostsForm;
