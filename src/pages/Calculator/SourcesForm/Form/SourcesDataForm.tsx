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
  const { t, adaptedSources,setAdaptedSources, register, errors, addSource, removeSource, handleSubmit, onSubmit  } = useSourcesForm(nextStep);

 

  const handleSwitchState = (sourceId: number) => {
    const updatedAdaptedSources = [...adaptedSources];
    const sourceIndex = updatedAdaptedSources.findIndex(source => source.id === sourceId);
    if (sourceIndex !== -1) {
      const updatedSource = { ...updatedAdaptedSources[sourceIndex] };
      updatedSource.state = !updatedSource.state;
      console.log('updatedSource:', updatedSource);
      
      if (updatedSource.state) {
        console.log('addSource:', updatedSource.name);
        addSource(updatedSource);
      } else {
        console.log('removeSource:', updatedSource.name);
        removeSource(updatedSource.name);
      }
      updatedAdaptedSources[sourceIndex] = updatedSource;
      setAdaptedSources(updatedAdaptedSources);
    }
  };
  const groupedBycategoryName: { [categoryName: string]: SourcesType[] } = adaptedSources.reduce(
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
                      source.map((source,index) => (
                        <Box key={index}>
                          <SourcesCard
                            key={source.id}
                            source={source}
                            handleSwitchState={() => handleSwitchState(source.id)}
                            props={register('sources')}
                          />
                          {
                            errors.sources && errors.sources[index]?.state && (
                              <ErrorText
                                error={errors.sources[index]?.state.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                          {
                            errors.sources && errors.sources[index]?.categoryName && (
                              <ErrorText
                                error={errors.sources[index]?.categoryName.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                          {
                            errors.sources && errors.sources[index]?.name && (
                              <ErrorText
                                error={errors.sources[index]?.name.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                          {
                            errors.sources && errors.sources[index]?.description && (
                              <ErrorText
                                error={errors.sources[index]?.description.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                          {
                            errors.sources && errors.sources[index]?.facturation && (
                              <ErrorText
                                error={errors.sources[index]?.facturation.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                          {
                            errors.sources && errors.sources[index]?.coverage && (
                              <ErrorText
                                error={errors.sources[index]?.coverage.message}
                                formErrorKey="calculator"
                              />
                            )
                          }
                        </Box>
                        
                        
                        
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
