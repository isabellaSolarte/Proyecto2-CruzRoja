import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';





const RegisterCategoryPage = () => {
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
                {/*<CustomText variante="texto" texto={userData ? userData.personalPhone : ''} />*/}
                </Grid>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomText
                      texto={t('registerCategory.scope')}
                      variante="subtitulo"
                      icon={<EnergySavingsLeafIcon color="success" />}
                  />
                  <CustomInput placeholder="Alcance" size="medium" />
                  {/*<CustomText variante="texto" texto={userData ? userData.personalEmail : ''} />*/}
                </Grid>
                {/* Breve descripción*/}
                <Grid item xs={12} md={12} sm={12} paddingInline={3} paddingBlock={10}>
                  <CustomText
                      texto={t('registerCategory.description')}
                      variante="subtitulo"
                      icon={<EnergySavingsLeafIcon color="success" />}
                  />
                  <CustomInput placeholder="Descripción" size="medium" />
                   {/*
                      <Grid item xs={12} md={12} sm={12} paddingInline={3} paddingBlock={2}>
                      {userData?.roles.map((rol: RoleModel) => (
                          <CustomAccordion
                          key={rol.id}
                          accordionSummary={rol.typeRole}
                          contentAccordion={rol.permissions.map((permission: PermissionModel) => (
                              <Box key={permission.id}>
                              <CustomText key={permission.id} texto={permission.name} variante="texto" />
                              <CustomText
                                  key={permission.id}
                                  texto={permission.description}
                                  variante="pequeño"
                              />
                              </Box>
                          ))}
                          />
                      ))}
                    </Grid>*/}
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

export default RegisterCategoryPage;