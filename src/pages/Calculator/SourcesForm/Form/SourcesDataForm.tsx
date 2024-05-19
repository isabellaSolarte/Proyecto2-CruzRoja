import { Box } from '@mui/material';
import { CustomAccordion, CustomButton, CustomText, ErrorText } from '../../../../components';
import { useSourcesForm } from '../hooks';
import { sourcesDictionaryPrueba2 } from './sourcesDictionary';
import { SourcesCard } from '../Components';
import { useEffect, useState } from 'react';
import { defaulSourceSchema } from '../Schemas';
import SourcesType from '../types/SourcesType';

interface SourcesDataFormProps {
  sources: SourcesType[];
}

const SourcesDataForm = (
  { sources = [] }: SourcesDataFormProps,
) => {
  const { adaptedSources, handleSubmit, onSubmit, register, errors, addSource, removeSource } = useSourcesForm();
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
  const groupedBycategoryName: { [categoryName: string]: SourcesType[] } = sourcesDictionary.reduce((acc, curr) => {
    if (acc[curr.categoryName]) {
        acc[curr.categoryName].push(curr);
    } else {
        acc[curr.categoryName] = [curr];
    }
    return acc;
}, {});

  return (
    <Box>
      <CustomText texto="Seleccione sus fuentes de emision." variante="texto"/>
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
          {errors.sources && <ErrorText  error={errors.sources.message} formErrorKey="userFormErrorsSources"/>}
        </Box>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <CustomButton content="Guardar" type="submit" variant="contained" color="success" />
        </Box>
      </form>
    </Box>
  );
};

export default SourcesDataForm;
