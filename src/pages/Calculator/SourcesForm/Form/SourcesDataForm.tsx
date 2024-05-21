import { Box } from '@mui/material';
import { CustomAccordion, CustomButton, CustomText, ErrorText } from '../../../../components';
import { useSourcesForm } from '../hooks';
import { sourcesDictionaryPrueba2 } from './sourcesDictionary';
import { SourcesCard } from '../Components';
import { useEffect, useState } from 'react';
import { defaulSourceSchema } from '../Schemas';
import SourcesType from '../types/SourcesType';



const SourcesDataForm = () => {
  const { adaptedSources, register, errors, addSource, removeSource, calculator, handleFormSubmit } = useSourcesForm();
  const [sourcesDictionary, setSourcesDictionary] = useState(adaptedSources);

  useEffect(() => {
    if (calculator.formReference.current) {
      calculator.formReference.current.addEventListener('submit', handleFormSubmit);
    }
    calculator.updateFormHasErrors(false);
  }, []);

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
      <form ref={calculator.formReference}>
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
      </form>
    </Box>
  );
};

export default SourcesDataForm;
