import { CustomButton, CustomText, ManagmentLayout } from '../../../components';
import { Fragment } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useValidateForm from './hooks/useValidateForm';
import FieldTable from './models/fieldTable';

interface ValidateFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const ValidateForm = ({ stepBack }: ValidateFormProps) => {
  const { adaptedSources, handleSubmit, onSubmit } = useValidateForm();

  const { t } = useTranslation('commons');

  return (
    <ManagmentLayout
      title={<CustomText texto={t('calculator.stepper.validation')} variante={'titulo'} />}
      generalContents={
        <form onSubmit={handleSubmit(onSubmit)}>
          {adaptedSources.map((source, index) => (
            <Fragment key={index}>
              <CustomText texto={source.categoryName} variante={'titulo'} />
              <br />
              {source.pollutants.map((pollutant, index) => (
                <div key={index}>
                  <CustomText texto={pollutant.pollutantName} variante={'subtitulo'} />
                  <br />
                  {pollutant.sources.map((src, index) => (
                    <div key={index}>
                      <FieldTable
                        labelInput1={src.name}
                        labelInput2={`${src.coverage.informedSources}/${src.coverage.totalSources} und`}
                        labelInput3={src.facturation.month}
                        labelInput4={`Costo $ ${src.facturation.cost} COP`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </Fragment>
          ))}
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
      }
    />
  );
};
export default ValidateForm;
