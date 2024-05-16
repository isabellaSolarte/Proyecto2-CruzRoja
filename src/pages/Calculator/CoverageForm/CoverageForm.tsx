import { Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from './hooks';
import { DoubleInput } from './components';
import { SourceModel } from '../../../models';

interface CoverageFormProps {
  sources: SourceModel[];
}

const CoverageForm = ({ sources = [] }: CoverageFormProps) => {
  // Generación de datos falsos
  const generateFakeData = (): SourceModel[] => {
    const fakeData: SourceModel[] = [];

    for (let i = 1; i <= 10; i++) {
      const source: SourceModel = {
        id: i,
        categoryName: `Category ${i}`,
        name: `Source ${i}`,
        description: `Description for Source ${i}`,
        state: Math.random() < 0.5, // Estado aleatorio
        coverage: {
          totalSources: Math.floor(Math.random() * 100), // Número total de fuentes aleatorio
          informedSources: Math.floor(Math.random() * 100), // Número de fuentes informadas aleatorio
        },
      };
      fakeData.push(source);
    }

    return fakeData;
  };

  sources = generateFakeData();

  const {
    t,
    adaptedSources,
    updateCoverageTotalSource,
    updateCoverageInformedSource,
    handleSubmit,
    register,
    getValues,
    onSubmit,
    errors,
  } = useCoverageForm(sources);

  const handleClick = () => {
    console.log(getValues());
    console.log(errors.coverage);
  };

  return (
    <ManagmentLayout
      title={<CustomText texto={t('calculator.coverageForm.title')} variante={'subtitulo'} />}
      description={
        <CustomText texto={t('calculator.coverageForm.description')} variante={'texto'} />
      }
      generalContents={
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            {adaptedSources.map((source, index) => (
              <>
                <Grid item xs={12} md={6} key={source.id} paddingInlineEnd={10} paddingBlockEnd={5}>
                  <DoubleInput
                    mainLabel={t('calculator.coverageForm.source')}
                    labelInput1={t('calculator.coverageForm.totalSources')}
                    labelInput2={t('calculator.coverageForm.informedSources')}
                    title={source.name}
                    propsInput1={{
                      registerInput1: register(`coverage.${index}.totalSources`),
                      updateInput1: updateCoverageTotalSource,
                      index: index,
                    }}
                    propsInput2={{
                      registerInput2: register(`coverage.${index}.informedSources`),
                      updateInput2: updateCoverageInformedSource,
                      index: index,
                    }}
                  />
                  {errors.coverage && errors.coverage[index]?.totalSources && (
                    <Grid item xs={12}>
                      <ErrorText
                        error={errors.coverage[index]?.totalSources?.message}
                        formErrorKey={'calculator'}
                      />
                    </Grid>
                  )}
                  {errors.coverage && errors.coverage[index]?.informedSources && (
                    <Grid item xs={12}>
                      <ErrorText
                        error={errors.coverage[index]?.informedSources?.message}
                        formErrorKey={'calculator'}
                      />
                    </Grid>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
          <CustomButton content="Guardar" color={'info'} type={'submit'} onClick={handleClick} />
        </form>
      }
    />
  );
};

export default CoverageForm;
