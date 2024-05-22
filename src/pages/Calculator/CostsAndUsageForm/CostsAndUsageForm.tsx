import { Box, Grid, Tooltip } from '@mui/material';
import { CustomButton, CustomIconDetails, CustomText, ErrorText } from '../../../components';
import useCostsForm from './hooks/useCostsAndUsageForm';
import DoubleInput from './models/DoubleInput';
import { Fragment } from 'react/jsx-runtime';
import HelpIcon from '@mui/icons-material/Help';
import { useTranslation } from 'react-i18next';

interface CostsFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const CostsForm = ({ nextStep, stepBack }: CostsFormProps) => {
  const { adaptedSources, handleSubmit, register, onSubmit, errors } = useCostsForm(nextStep);
  const { t } = useTranslation('commons');
  return (
    <Box>
        <div style={{ display: 'flex', alignItems: 'center'}}>
        <CustomText texto={t('pageTitles.calculatorCostsUsages')} variante={'titulo'} />
        <CustomIconDetails
          description={t('calculator.costAndUsage.help')}
          icon={<HelpIcon color={'disabled'} />}
        />
      </div>
      <div>
      <CustomText texto={t('calculator.costAndUsage.description')} variante={'texto'} />
          <ul>
            <li>
            <CustomText texto={t('calculator.costAndUsage.helpCost')} variante={'texto'} />
            </li>
            <li>
            <CustomText texto={t('calculator.costAndUsage.helpUsage')} variante={'texto'} />
            </li>
          </ul>
        </div>
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
