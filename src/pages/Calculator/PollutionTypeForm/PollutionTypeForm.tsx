import { useEffect, useContext, useState  } from 'react';
import { useTranslation } from 'react-i18next';
import {CustomText, ErrorText, ManagmentLayout, CustomAccordion} from '../../../components';
import { Box } from '@mui/material';
import { CategoryModel, PollutionTypeModel } from '../../../models';
import { CalculatorContext } from '../../../contexts/CalculatorForm';
import PollutionTypeCard from './components/PollutionTypeCard'; 
import usePollutionTypeForm from './hooks/PollutionTypeHook';


const PollutionTypeForm = () => {

    const { t } = useTranslation('commons');
    const calculator = useContext(CalculatorContext);

    console.log(calculator.getCalculatorState());
    const [pollutionTypeList, setPollutionTypeList] = useState<CategoryModel[]>([]);

    const { 
      handleSubmit,
      onSubmit,
      register,
      getValues,
      addPollutionType,
      removePollutionType,
      errors,
      control,
      //t,
      reset,
    } = usePollutionTypeForm()
    
      // Use useEffect to set the pollutionTypeList once the component mounts
  useEffect(() => {
    const calculatorState = calculator.getCalculatorState();
    setPollutionTypeList(calculatorState);
  }, [calculator]); // Add calculator as a dependency
  const PollutionTypeData = []

  return (
    <ManagmentLayout 
    title={<CustomText texto={t('calculator.pollutionTypeForm.title')} variante={'titulo'} />}
    description={
      <CustomText texto={t('calculator.pollutionTypeForm.description')} variante={'texto'} />
    }
    
    generalContents={
      <form>
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

          
{/*         {fetchCategories.map((pollutionType, index) => (
            <PollutionTypeCard
              key={pollutionType.id}
              pollutionType={pollutionType}
              addedpollutionType={PollutionTypeData?.pollutionTypes}
              positiveAction={addPollutionType}
              negativeAction={()=>{removePollutionType(pollutionType.name)}}
              props={register('pollutionTypes')}
            />
          ))} 
          {errors.permissions && <ErrorText  error={errors.permissions.message} formErrorKey="userFormErrorsRole"/>} */}
        </Box>
      </form>
    }
    >

    </ManagmentLayout>
      
  );
  };
  
export default PollutionTypeForm;
  