/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid } from '@mui/material';
import { CustomButton, CustomText, EmptyBox, ErrorText } from '../../../components';
import { useCoverageForm } from './hooks';
import { DoubleInput } from './components';
import { Fragment } from 'react/jsx-runtime';

interface CoverageFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const CoverageForm = ({ nextStep, stepBack }: CoverageFormProps) => {
  const { t, adaptedSources, errors, register, handleSubmit, onSubmit } = useCoverageForm(nextStep);

  return (
    <Box>
      <EmptyBox height={50} width={0} />
      <CustomText texto={t('calculator.coverageForm.title')} variante={'titulo'} />
      <CustomText texto={t('calculator.coverageForm.description')} variante={'texto'} />
      <ul>
        <li>
          <CustomText texto={t('calculator.coverageForm.helpTotal')} variante={'texto'} />
        </li>
        <li>
          <CustomText texto={t('calculator.coverageForm.helpInformed')} variante={'texto'} />
        </li>
      </ul>

      <EmptyBox height={50} width={0} />
      <CustomText texto={'Fuentes de Emisión'} variante={'subtitulo'} />
      <EmptyBox height={40} width={0} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          {adaptedSources.map((pollutants, index) => (
            <Fragment key={index}>
              <Grid
                item
                xs={12}
                md={6}
                paddingInlineEnd={10}
                paddingBlockEnd={5}
                key={pollutants.id}
              >
                <DoubleInput
                  mainLabel={t('calculator.coverageForm.source')}
                  labelInput1={t('calculator.coverageForm.totalSources')}
                  labelInput2={t('calculator.coverageForm.informedSources')}
                  title={pollutants.name}
                  propsInput1={{
                    registerInput1: register(`coverage.${index}.totalSources`),
                  }}
                  propsInput2={{
                    registerInput2: register(`coverage.${index}.informedSources`),
                  }}
                />

                {!!errors.coverage && !!errors.coverage[index]?.totalSources && (
                  <Grid item xs={12}>
                    <ErrorText
                      error={errors.coverage[index]?.totalSources.message}
                      formErrorKey={'calculator'}
                    />
                  </Grid>
                )}
                {!!errors.coverage && !!errors.coverage[index]?.informedSources && (
                  <Grid item xs={12}>
                    <ErrorText
                      error={errors.coverage[index]?.informedSources.message}
                      formErrorKey={'calculator'}
                    />
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
            content={t('generalButtonText.back')}
            onClick={stepBack}
          />

          <CustomButton
            variant="contained"
            color="info"
            content={t('components.stepper.next')}
            type="submit"
          />
        </Box>
      </form>
    </Box>
  );
};

export default CoverageForm;
