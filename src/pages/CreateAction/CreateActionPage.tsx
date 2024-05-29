import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";
import { PathNames } from '../../core';

const CreateActionPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  const handleCreateButtonClick = () => {
    navigate(PathNames.CATEGORIES);
  };

  useEffect(() => {
    //
  }, [id]);

  useEffect(() => {
   //
  }, ); 

  const onSubmit = () => {
    //
  };

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createAction')} variante="titulo" />}
      generalContents={
        <Box>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerAction.nameAction')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Nombre')}
                  size="large"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerAction.cost')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Costo')}
                  size="large"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomText
                  texto={t('registerAction.description')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Descripción')}
                  size="large"
                />
              </Grid>
              
            </Grid>
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              
                  <CustomButton
                      content={t('components.stepper.back')} 
                      onClick={handleCreateButtonClick}
                  />
                   <CustomButton
                    content={t('generalButtonText.save')}
                    type="submit"
                    variant="contained"
                    color="success"
                  />
                 </Box>    
          </form>
        </Box>
      }
    />
  );
};

export default CreateActionPage;
