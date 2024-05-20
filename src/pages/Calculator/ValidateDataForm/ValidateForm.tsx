import { CustomButton, CustomText, ManagmentLayout } from '../../../components';
import { Fragment } from 'react/jsx-runtime';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useValidateForm from './hooks/useValidateForm';
import FieldTable from './models/fieldTable';
const ValidateForm = () =>
{
    const {  adaptedSources,handleSubmit,onSubmit} = useValidateForm();

    const { t } = useTranslation('commons');

    return(
        <ManagmentLayout
            title={<CustomText texto={t('calculator.stepper.validation')} variante={'titulo'} />}
            
            generalContents={
                <form onSubmit={handleSubmit(onSubmit)}>
                    {adaptedSources.map((source , index) => (
                        <Fragment key={index}>
                         <CustomText texto={source.categoryName} variante={'titulo'} />
                         <br />
                         {source.pollutants.map((pollutant,index) =>(
                            <div key={index}>
                                <CustomText texto={pollutant.pollutantName} variante={'subtitulo'} />
                                <br />
                                {pollutant.sources.map((src,index) => (
                                    <div key={index}>
                                        <FieldTable labelInput1={src.name} labelInput2={`${src.coverage.informedSources}/${src.coverage.totalSources} und`} labelInput3={`${src.facturation.month}`} labelInput4={`Costo $ ${src.facturation.cost} COP`} />
                                    </div>
                                ))

                                }
                            </div>
                         ))}
                       </Fragment>
                    ))}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end', 
                            padding: '0 20%', 
                            marginTop: '7rem',
                        }}
                    >
                        
                    <Box sx={{ position: 'relative', top: '4rem' }}>
                        <CustomButton content="Guardar" color="success" type="submit" />
                    </Box>
                    </Box>  
                    
                </form>
            }
        />
    );
};
export default ValidateForm;