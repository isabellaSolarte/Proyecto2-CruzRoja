import { Box } from '@mui/material';
import { CustomAccordion, CustomButton, CustomCard, ErrorText } from '../../../components';
import { useSourcesForm } from '../hooks';
import { sourcesDictionaryPrueba2 } from './sourcesDictionary';
import { SourcesCard } from '../Components';
import { useEffect, useState } from 'react';
import { defaulSourceSchema } from '../Schemas';
import { Category } from '@mui/icons-material';
import SourcesType from '../types/SourcesType';

const SourcesDataForm = () => {
  const { handleSubmit, onSubmit, register, errors } = useSourcesForm();
  const [sourcesDictionary, setSourcesDictionary] = useState([defaulSourceSchema]);
  useEffect(() => {
    setSourcesDictionary(sourcesDictionaryPrueba2);
  }, []);

  const handleSwitchState = (sourceId: number) => {
    const updatedSourcesDictionary = [...sourcesDictionary];
    const sourceIndex = updatedSourcesDictionary.findIndex(source => source.id === sourceId);
    if (sourceIndex !== -1) {
      const updatedSource = { ...updatedSourcesDictionary[sourceIndex] };
      updatedSource.state = !updatedSource.state;
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
                          props={register('source')}
                        />
                      ))
                    }
                    {errors.name && <ErrorText  error={errors.name.message} formErrorKey="userFormErrorsSources"/>}
                  </Box>
                }
              />
              )
            )
          }
          {errors.categoryName && <ErrorText  error={errors.categoryName.message} formErrorKey="userFormErrorsSources"/>}
        </Box>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton content="Atras" onClick={() => {}} />
          <CustomButton content="Siguiente" type="submit" variant="contained" color="success" />
        </Box>
      </form>
    </Box>
  );
};

export default SourcesDataForm;
