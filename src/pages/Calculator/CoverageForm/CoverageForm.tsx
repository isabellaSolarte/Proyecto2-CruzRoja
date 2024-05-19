/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from '@mui/material';
import { CustomText, ErrorText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from './hooks';
import { DoubleInput } from './components';
import { Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';

const CoverageForm = () => {
  const { t, adaptedSources, errors, register, calculator, handleFormSubmit } = useCoverageForm();

  useEffect(() => {
    if (calculator.formReference.current) {
      calculator.formReference.current.addEventListener('submit', handleFormSubmit);
    }
    calculator.updateFormHasErrors(false);
  }, []);

  return (
    <ManagmentLayout
      title={<CustomText texto={t('calculator.coverageForm.title')} variante={'subtitulo'} />}
      description={
        <CustomText texto={t('calculator.coverageForm.description')} variante={'texto'} />
      }
      generalContents={
        <form ref={calculator.formReference}>
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
        </form>
      }
    />
  );
};

export default CoverageForm;
