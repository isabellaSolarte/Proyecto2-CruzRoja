import { Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from './hooks';
import { DoubleInput } from './components';
import { Fragment } from 'react/jsx-runtime';

const CoverageForm = () => {
  const {
    t,
    adaptedSources,
    updateCoverageTotalSource,
    updateCoverageInformedSource,
    handleSubmit,
    register,
    onSubmit,
    errors,
  } = useCoverageForm();

  return (
    <ManagmentLayout
      title={<CustomText texto={t('calculator.coverageForm.title')} variante={'subtitulo'} />}
      description={
        <CustomText texto={t('calculator.coverageForm.description')} variante={'texto'} />
      }
      generalContents={
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            {adaptedSources.map((pollutants, pIndex) => (
              <Fragment key={pollutants.pollutantId}>
                {pollutants.sources.map((source, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    paddingInlineEnd={10}
                    paddingBlockEnd={5}
                    key={source.id}
                  >
                    <DoubleInput
                      mainLabel={t('calculator.coverageForm.source')}
                      labelInput1={t('calculator.coverageForm.totalSources')}
                      labelInput2={t('calculator.coverageForm.informedSources')}
                      title={'source.name'}
                      propsInput1={{
                        registerInput1: register(
                          `coverage.${pIndex}.sources.${index}.totalSources`,
                        ),
                        updateInput1: updateCoverageTotalSource,
                        references: [pIndex, index],
                      }}
                      propsInput2={{
                        registerInput2: register(
                          `coverage.${pIndex}.sources.${index}.informedSources`,
                        ),
                        updateInput2: updateCoverageInformedSource,
                        references: [pIndex, index],
                      }}
                    />

                    {!!errors.coverage &&
                      !!errors.coverage[pIndex]?.sources &&
                      errors.coverage[pIndex]?.sources[index]?.totalSources && (
                        <Grid item xs={12}>
                          <ErrorText
                            error={errors.coverage[pIndex]?.sources[index]?.totalSources.message}
                            formErrorKey={'calculator'}
                          />
                        </Grid>
                      )}
                    {!!errors.coverage &&
                      !!errors.coverage[pIndex]?.sources &&
                      errors.coverage[pIndex]?.sources[index]?.informedSources && (
                        <Grid item xs={12}>
                          <ErrorText
                            error={errors.coverage[pIndex]?.sources[index]?.informedSources.message}
                            formErrorKey={'calculator'}
                          />
                        </Grid>
                      )}
                  </Grid>
                ))}
              </Fragment>
            ))}
          </Grid>
          <CustomButton content="Guardar" color={'info'} type={'submit'} />
        </form>
      }
    />
  );
};

export default CoverageForm;
