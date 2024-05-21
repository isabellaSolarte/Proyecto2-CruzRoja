import { Box } from '@mui/material';
import { CustomAccordion, CustomButton, ErrorText } from '../../../../components';
import { useSourcesForm } from '../hooks';
import { SourcesCard } from '../Components';
import SourcesType from '../types/SourcesType';
import { useState } from 'react';

interface SourcesFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const SourcesDataForm = ({ nextStep, stepBack }: SourcesFormProps) => {
  const { t, adaptedSources, register, errors, addSource, removeSource, handleSubmit, onSubmit  } = useSourcesForm(nextStep);
  const [sourcesDictionary, setSourcesDictionary] = useState(adaptedSources);

 

  const handleSwitchState = (sourceId: number) => {
    const updatedSourcesDictionary = [...sourcesDictionary];
    const sourceIndex = updatedSourcesDictionary.findIndex(source => source.id === sourceId);
    if (sourceIndex !== -1) {
      const updatedSource = { ...updatedSourcesDictionary[sourceIndex] };
      updatedSource.state = !updatedSource.state;
      if (updatedSource.state) {
        console.log('addSource:', updatedSource.name);
        addSource(updatedSource);
      } else {
        console.log('removeSource:', updatedSource.name);
        removeSource(updatedSource.name);
      }
      updatedSourcesDictionary[sourceIndex] = updatedSource;
      setSourcesDictionary(updatedSourcesDictionary);
    }
  };
  const groupedBycategoryName: { [categoryName: string]: SourcesType[] } = sourcesDictionary.reduce(
    (acc, curr) => {
      if (acc[curr.categoryName]) {
        acc[curr.categoryName].push(curr);
      } else {
        acc[curr.categoryName] = [curr];
      }
      return acc;
    },
    {},
  );

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={4}>
          {
            Object.entries(groupedBycategoryName).map(([categoryName, source]) => (
              <CustomAccordion 
                key={categoryName}
                accordionSummary={categoryName} 
                contentAccordion={
                  <Box>
                    {
                      source.map((source) => (
                        <SourcesCard
                          key={source.id}
                          source={source}
                          handleSwitchState={() => handleSwitchState(source.id)}
                          props={register('sources')}
                        />
                      ))
                    }
                  </Box>
                }
              />
              )
            )
          }
          {errors.sources && <ErrorText  error={errors.sources.message} formErrorKey="calculator"/>}
        </Box>
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

export default SourcesDataForm;
