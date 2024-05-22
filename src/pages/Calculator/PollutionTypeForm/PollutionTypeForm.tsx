import { useEffect } from 'react';
import {CustomText, ErrorText, ManagmentLayout, CustomAccordion} from '../../../components';
import { Grid,Box } from '@mui/material';
import PollutionTypeCard from './components/PollutionTypeCard'; 
import usePollutionTypeForm from './hooks/usePollutionTypeForm';
import CustomButton from './../../../components/Atoms/CustomButton/CustomButton';


interface PollutionTypeFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const PollutionTypeForm = ({ nextStep, stepBack }: PollutionTypeFormProps) => {
    
    const { 
      t,
      adaptedPollutionTypes,
      register,
      updatePollutionType,
      errors,
      handleSubmit, 
      onSubmit,
      reset,
    } = usePollutionTypeForm(nextStep)

    useEffect(() => {
    }, [errors]);

  return (
    <ManagmentLayout 
    title={<CustomText texto={t('calculator.pollutionTypeForm.title')} variante={'titulo'} />}
    description={
      <CustomText texto={t('calculator.pollutionTypeForm.description')} variante={'texto'} />
    }
    
    generalContents={
      <form onSubmit={handleSubmit(onSubmit)}>
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

          {!!errors.pollutionType && (
            <Grid item xs={12}>
              <ErrorText
                error={errors.pollutionType.message}
                formErrorKey={'calculator'}
              />
            </Grid>
          )}
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
    }
    >
    </ManagmentLayout>
      
  );
  };
  
export default PollutionTypeForm;
  