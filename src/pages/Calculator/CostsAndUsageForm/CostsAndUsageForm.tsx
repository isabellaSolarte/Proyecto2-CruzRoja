import { Box, Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText } from '../../../components';
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
      <CustomText texto={'Consumos y costos'} variante={'titulo'} />
      <CustomText texto={'A continuación ingrese el  consumo, costo y fecha de evaluación para cada fuente:'} variante={'texto'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {adaptedSources.map((pollutants, index) => (
            <Fragment key={index}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                {!!errors.costs && !!errors.costs[index]?.cost && (
                  <ErrorText error={errors.costs[index]?.cost.message} formErrorKey={'calculator'} />
                )}
                {!!errors.costs && !!errors.costs[index]?.month && (
                  <ErrorText error={errors.costs[index]?.month.message} formErrorKey={'calculator'} />
                )}
                {!!errors.costs && !!errors.costs[index]?.usage && (
                  <ErrorText error={errors.costs[index]?.usage.message} formErrorKey={'calculator'} />
                )}
                {!!errors.costs && !!errors.costs[index]?.year && (
                  <ErrorText error={errors.costs[index]?.year.message} formErrorKey={'calculator'} />
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
