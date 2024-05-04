import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import {
  ManagmentLayout,
  CustomButton,
  CustomText,
  CustomAccordion,
  NotFoundLayout,
} from '../../components';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useUserPage } from './Hooks/useUserPage';
import { useParams } from 'react-router-dom';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { PermissionModel } from '../../models/RoleModels/PermissionModel';
import { RoleModel } from '../../models';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

const ViewUserPage = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams<{ id: string }>();
  const { loadUserDataByID, userData, handleEdit, loading } = useUserPage();
  const userPosiion =
    userData && userData.position ? userData.position : t('positions.business_representative');

  useEffect(() => {
    void loadUserDataByID(Number(id));
  }, []);

  if (!loading && !userData) {
    return <NotFoundLayout title="user" />;
  }

  return (
    <ManagmentLayout
      title={
        <Box sx={{ display: 'flex' }}>
          <AccountCircleIcon sx={{ fontSize: 64 }} />
          <Box>
            <CustomText
              texto={`${userData?.names} ${userData?.lastNames}`}
              variante={'subtitulo'}
              styles={{ lineHeight: 1 }}
            />
            <CustomText texto={userPosiion} variante="texto" styles={{ lineHeight: 1.3 }} />
            <CustomText
              texto={`@${userData?.username}`}
              variante="pequeño"
              styles={{ lineHeight: 1.3 }}
            />
          </Box>
        </Box>
      }
      actionsContent={
        <Box>
          <CustomButton
            content={t('generalButtonText.edit')}
            onClick={handleEdit}
            variant="contained"
            color="info"
            icon={<EditIcon />}
            sx={{
              height: '2rem',
            }}
          />
        </Box>
      }
      generalContents={
        <Box>
          <Grid container>
            <Grid item xs={12} paddingInline={3}>
              <CustomText texto={t('usersPages.userForm.personalInfo')} variante={'subtitulo'} />
            </Grid>

            <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
              <CustomText
                texto={t('usersPages.userForm.personalPhone')}
                variante="pequeño"
                icon={<PhoneAndroidOutlinedIcon color="disabled" />}
              />
              <CustomText variante="texto" texto={userData ? userData.personalPhone : ''} />
            </Grid>
            <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
              <CustomText
                texto={t('usersPages.userForm.email')}
                variante="pequeño"
                icon={<MarkEmailReadOutlinedIcon color="disabled" />}
              />
              <CustomText variante="texto" texto={userData ? userData.personalEmail : ''} />
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

            {userData && userData.companyNit && (
              <>
                <Grid item xs={12} md={12} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomText texto={t('usersPages.userForm.companyInfo')} variante="subtitulo" />
                </Grid>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomText
                    texto={t('company.title')}
                    variante="pequeño"
                    icon={<BusinessOutlinedIcon color="disabled" />}
                  />
                  <CustomText variante="texto" texto={userData ? userData.companyName : ''} />
                </Grid>
                <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
                  <CustomButton
                    content={t('generalButtonText.view') + ' empresa'}
                    onClick={() => {}}
                    variant="contained"
                    color="warning"
                    sx={{
                      height: '2rem',
                    }}
                  />
                </Grid>
              </>
            )}

            {/* SECCIÓN DE ROLES ACTUALES QUE PERTENECEN AL USUARIO */}
            <Grid item xs={12} md={12} sm={12} paddingInline={3} paddingBlock={2}>
              <CustomText texto={t('usersPages.userForm.asignedRoles')} variante="subtitulo" />
            </Grid>
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
            </Grid>
          </Grid>
        </Box>
      }
    />
  );
};

export default ViewUserPage;
