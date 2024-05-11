import { Grid } from '@mui/material';
import { CustomButton, CustomText, ErrorText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from '../hooks';
import { DoubleInput } from '../components';
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

  const { t, adaptedSources, updateCoverageTotalSource, updateCoverageInformedSource } =
    useCoverageForm(sources);


  return (
    <ManagmentLayout
      title={<CustomText texto={t('calculator.coverageForm.title')} variante={'subtitulo'} />}
      description={
        <CustomText texto={t('calculator.coverageForm.description')} variante={'texto'} />
      }
      generalContents={
        <>
          <Grid container>
            {adaptedSources.map((source, index) => (
              <Grid item xs={12} md={6} key={source.sourceId}>
                <DoubleInput
                  mainLabel={t('calculator.coverageForm.source')}
                  labelInput1={t('calculator.coverageForm.totalSources')}
                  labelInput2={t('calculator.coverageForm.informedSources')}
                  title={source.name}
                  propsInput1={{
                    updateInput1: updateCoverageTotalSource,
                    index: index,
                  }}
                  propsInput2={{
                    updateInput2: updateCoverageInformedSource,
                    index: index,
                  }}
                />
                {source.errors.map(err => (
                  <ErrorText key={source.sourceId} error={'commons'} formErrorKey={err} />
                ))}
              </Grid>
            ))}
          </Grid>
          <CustomButton content="Guardar" color={'info'} type={'submit'} />
        </>
      }
    />
  );
};

export default CoverageForm;
