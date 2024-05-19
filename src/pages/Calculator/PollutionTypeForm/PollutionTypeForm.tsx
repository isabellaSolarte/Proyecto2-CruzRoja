import { useEffect, useContext, useState  } from 'react';
import { useTranslation } from 'react-i18next';
import {CustomText, ErrorText, ManagmentLayout, CustomAccordion} from '../../../components';
import { Box } from '@mui/material';
import { CategoryModel, PollutionTypeModel } from '../../../models';
import PollutionTypeCard from './components/PollutionTypeCard'; 
import usePollutionTypeForm from './hooks/PollutionTypeHook';


const PollutionTypeForm = () => {

    const [pollutionTypeList, setPollutionTypeList] = useState<CategoryModel[]>([]);
    
    const { 
      t,
      adaptedPollutionTypes,
      register,
      addPollutionType,
      removePollutionType,
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


  console.log('adaptedPollutionTypes: ', adaptedPollutionTypes);
  
  
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
        {pollutionTypeList.map(categoria =>
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
                    addedpollutionType={PollutionTypeData?.pollutionTypes}
                    positiveAction={addPollutionType}
                    negativeAction={()=>{removePollutionType(pollutionType.name)}}
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
  