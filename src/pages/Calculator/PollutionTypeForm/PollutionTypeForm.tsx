import { useEffect } from 'react';
import {CustomText, ErrorText, ManagmentLayout, CustomAccordion} from '../../../components';
import { Box } from '@mui/material';
import PollutionTypeCard from './components/PollutionTypeCard'; 
import usePollutionTypeForm from './hooks/PollutionTypeHook';


const PollutionTypeForm = () => {
    
    const { 
      t,
      adaptedPollutionTypes,
      register,
      updatePollutionType,
      errors,
      calculator,
      handleFormSubmit,
      reset,
    } = usePollutionTypeForm()
    
    
    useEffect(() => {
      if (calculator.formReference.current) {
        calculator.formReference.current.addEventListener('submit', handleFormSubmit);
      }
      calculator.updateFormHasErrors(false);
    }, []);


  const PollutionTypeData = []
  return (
    <ManagmentLayout 
    title={<CustomText texto={t('calculator.pollutionTypeForm.title')} variante={'titulo'} />}
    description={
      <CustomText texto={t('calculator.pollutionTypeForm.description')} variante={'texto'} />
    }
    
    generalContents={
      <form ref={calculator.formReference}>
        <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8'}}>
        {adaptedPollutionTypes.map(categoria =>
          <CustomAccordion
          key={categoria.id}
          accordionSummary={categoria.name}
          contentAccordion={
            <>
              {
                categoria.pollutans.map(pollutionType => (
                  <PollutionTypeCard
                    key={pollutionType.id}
                    pollutionType={pollutionType}
                    positiveAction={()=>{updatePollutionType(pollutionType.name, true)}}
                    negativeAction={()=>{updatePollutionType(pollutionType.name, false)}}
                    props={register('pollutionType')}
                  />
                ))
              }
            </>
          }
          />
            
          
        )}
        </Box>
      </form>
    }
    >
    </ManagmentLayout>
      
  );
  };
  
export default PollutionTypeForm;
  