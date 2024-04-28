import { CustomInput, ManagmentLayout } from '../../components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CustomButton, CustomText } from '../../components';
import { Box, Grid } from '@mui/material';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEditUser } from './hooks';
import { VolunterUserModel } from '../../models';

const EditUserPage = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams<{ id: string }>();
  const {
    userData,
    roles,
    loadUserData,
    handleSave,
    handleCancel,
    onSubmit,
    handleSubmit,
    register,
  } = useEditUser();
  const userPosition =
    (userData as VolunterUserModel)?.position || t('positions.business_representative');

  useEffect(() => {
    void loadUserData(Number(id));
  }, []);

  console.log(roles);
  return (
    <ManagmentLayout
      title={
        <Box sx={{ display: 'flex' }}>
          <AccountCircleIcon sx={{ fontSize: 64 }} />
          <Box>
            <CustomText texto={''} variante="subtitulo" styles={{ lineHeight: 1 }} />
            <CustomText
              texto={`@${userData?.username}`}
              variante="subtitulo"
              styles={{ lineHeight: 1 }}
            />
            <CustomText texto={userPosition} variante="texto" styles={{ lineHeight: 1.3 }} />
          </Box>
        </Box>
      }
      actionsContent={
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row' }}>
          <CustomButton
            content={t('generalButtonText.cancel')}
            onClick={handleCancel}
            variant="contained"
            color="warning"
            icon={<HighlightOffIcon />}
            sx={{
              height: '2rem',
              mr: 2,
            }}
          />
          <CustomButton
            content={t('generalButtonText.save')}
            onClick={handleSave}
            variant="contained"
            color="success"
            icon={<SaveAsIcon />}
            sx={{
              height: '2rem',
            }}
          />
        </Box>
      }
      generalContents={
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} paddingInline={3}>
                <CustomText texto={t('usersPages.userForm.personalInfo')} variante={'subtitulo'} />
              </Grid>

              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.documentType')}
                  variante="pequeño"
                  icon={<CreditScoreOutlinedIcon color="disabled" />}
                />
                <CustomText variante="texto" texto={userData ? userData.documentType : ''} />
              </Grid>

              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.documentNumber')}
                  variante="pequeño"
                  icon={<MedicalInformationOutlinedIcon color="disabled" />}
                />
                <CustomText variante="texto" texto={userData ? userData.id.toString() : ''} />
              </Grid>

              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.name')}
                  variante="pequeño"
                  icon={<AccountBoxIcon color="disabled" />}
                />
                <CustomInput
                  placeholder="Nombre"
                  defaultValue={userData ? userData.names : ''}
                  props={register('names')}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.lastname')}
                  variante="pequeño"
                  icon={<AccountBoxIcon color="disabled" />}
                />
                <CustomInput
                  placeholder="Apellidos"
                  defaultValue={userData ? userData.lastNames : ''}
                  props={register('lastNames')}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.personalPhone')}
                  variante="pequeño"
                  icon={<PhoneAndroidOutlinedIcon color="disabled" />}
                />
                <CustomInput
                  placeholder="Telefono"
                  defaultValue={userData ? userData.personalPhone : ''}
                  props={register('personalPhone')}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                <CustomText
                  texto={t('usersPages.userForm.email')}
                  variante="pequeño"
                  icon={<MarkEmailReadOutlinedIcon color="disabled" />}
                />
                <CustomInput
                  placeholder="Email"
                  defaultValue={userData ? userData.personalEmail : ''}
                  props={register('personalEmail')}
                  size="medium"
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      }
    />
  );
};

export default EditUserPage;
