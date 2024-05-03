import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';



const CreateCategoryPage = () => {
  const { t } = useTranslation('commons');
    
    return (
        <ManagmentLayout
          title={<CustomText texto={t('pageTitles.registerCategory')} variante="titulo" />}
          generalContents={
            <Box>
              <Grid container>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomText
                      texto={t('registerCategory.nameCategory')}
                      variante="subtitulo"
                      icon={<EnergySavingsLeafIcon color="success" />}
                  />
                  <CustomInput placeholder="Nombre" size="medium" />
                
                </Grid>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomText
                      texto={t('registerCategory.scope')}
                      variante="subtitulo"
                      icon={<EnergySavingsLeafIcon color="success" />}
                  />
                  <CustomInput placeholder="Alcance" size="medium" />
                  
                </Grid>
                {/* Breve descripción*/}
                <Grid item xs={12} md={12} sm={12} paddingInline={3} paddingBlock={10}>
                  <CustomText
                      texto={t('registerCategory.description')}
                      variante="subtitulo"
                      icon={<EnergySavingsLeafIcon color="success" />}
                  />
                  <CustomInput placeholder="Descripción" size="medium" />
                   
                </Grid>
            
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomButton
                      content={t('components.stepper.back')} 
                      //onClick={handleCreateButtonClick}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomButton
                  content={t('generalButtonText.save')}
                  type='submit'
                  variant="contained"
                  color="success"
                />
                </Grid>
            
              </Grid>
            </Box>
          }
        />

    );


};

export default CreateCategoryPage;