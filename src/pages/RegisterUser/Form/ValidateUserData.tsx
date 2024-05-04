/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CustomButton, CustomText, EmptyBox } from '../../../components';
import { PermissionModel, RoleModel } from '../../../models';
import { Box, Grid, useTheme } from '@mui/material';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface ValidateUserDataProps {
  userData: any;
  handleNextStep: () => Promise<void>;
  handleStepBack: () => void;
}

const ValidateUserData = ({ userData, handleNextStep, handleStepBack }: ValidateUserDataProps) => {
  const { t } = useTranslation('commons');
  const theme = useTheme();

  const castUserData: any = userData;
  const permisos = userData.roles.map((r: RoleModel) => r.permissions).flat();

  const handleCreateUser = async () => {
    await handleNextStep();
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} paddingTop={3}>
          <CustomText texto={'Información personal'} variante={'subtitulo'} />
        </Grid>

        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Tipo de identificación'}
            variante="pequeño"
            icon={<CreditScoreOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />}
          />
          <CustomText texto={castUserData.documentType} variante="texto" />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Número de identificación'}
            variante="pequeño"
            icon={
              <MedicalInformationOutlinedIcon
                sx={{ fontSize: 16, color: theme.textColors?.grey }}
              />
            }
          />
          <CustomText texto={castUserData.id.toString()} variante="texto" />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Nombre y apellidos'}
            variante="pequeño"
            icon={
              <ContactEmergencyOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />
            }
          />
          <CustomText texto={`${castUserData.names} ${castUserData.lastNames}`} variante="texto" />
        </Grid>

        <Grid item xs={12} paddingTop={3}>
          <CustomText texto={'Información de contacto'} variante={'subtitulo'} />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Teléfono personal'}
            variante="pequeño"
            icon={<PhoneAndroidOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />}
          />
          <CustomText texto={castUserData.personalPhone} variante="texto" />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Correo personal'}
            variante="pequeño"
            icon={
              <MarkEmailReadOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />
            }
          />
          <CustomText texto={castUserData.personalEmail} variante="texto" />
        </Grid>

        <Grid item xs={12} paddingTop={3}>
          <CustomText texto={'Datos de usuario'} variante={'subtitulo'} />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Nombre de usuario'}
            variante="pequeño"
            icon={
              <AccountCircleOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />
            }
          />
          <CustomText texto={castUserData.username} variante="texto" />
        </Grid>

        <Grid item xs={12} paddingTop={3}>
          <CustomText texto={'Niveles de acceso'} variante={'subtitulo'} />
        </Grid>
        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Roles'}
            variante="pequeño"
            icon={
              <AdminPanelSettingsOutlinedIcon
                sx={{ fontSize: 16, color: theme.textColors?.grey }}
              />
            }
          />
          <CustomText
            texto={castUserData.roles.map((r: { typeRole: any }) => `• ${r.typeRole}`).join('\n')}
            variante="texto"
          />
        </Grid>

        <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
          <CustomText
            texto={'Acciones que el usuario podrá realizar'}
            variante="pequeño"
            icon={<VpnKeyOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />}
          />
          <CustomText
            texto={permisos.map((p: PermissionModel) => `• ${p.description}`).join('\n')}
            variante="texto"
          />
        </Grid>

        {castUserData.position !== undefined && (
          <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
            <CustomText texto={'Cargo como voluntario de la cruz roja'} variante="pequeño" />
            <CustomText texto={castUserData.position} variante="texto" />
          </Grid>
        )}

        {castUserData.companyNit !== undefined && (
          <>
            <Grid item xs={12} paddingTop={3}>
              <CustomText texto={'Datos de la empresa'} variante={'subtitulo'} />
            </Grid>
            <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
              <CustomText
                texto={'Nit de la empresa'}
                variante={'pequeño'}
                icon={
                  <LocalConvenienceStoreOutlinedIcon
                    sx={{ fontSize: 16, color: theme.textColors?.grey }}
                  />
                }
              />
              <CustomText texto={castUserData.companyNit.toString()} variante={'texto'} />
            </Grid>
          </>
        )}
        {castUserData.companyName !== undefined && (
          <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
            <CustomText
              texto={'Nombre de empresa'}
              variante={'pequeño'}
              icon={<DomainAddOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />}
            />
            <CustomText texto={castUserData.companyName} variante={'texto'} />
          </Grid>
        )}
        {castUserData.companyPhone !== undefined && (
          <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
            <CustomText
              texto={'Teléfono de empresa'}
              variante={'pequeño'}
              icon={
                <PhoneAndroidOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />
              }
            />
            <CustomText texto={castUserData.companyPhone} variante={'texto'} />
          </Grid>
        )}
        {castUserData.companyEmail !== undefined && (
          <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
            <CustomText
              texto={'Correo de empresa'}
              variante={'pequeño'}
              icon={
                <MarkEmailReadOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />
              }
            />
            <CustomText texto={castUserData.companyEmail} variante={'texto'} />
          </Grid>
        )}
        {castUserData.address !== undefined && (
          <Grid paddingInline={2} item lg={4} md={6} xs={12} paddingBlock={1.3}>
            <CustomText
              texto={'Dirección de empresa'}
              variante={'pequeño'}
              icon={<LocationOnOutlinedIcon sx={{ fontSize: 16, color: theme.textColors?.grey }} />}
            />
            <CustomText
              texto={`${castUserData.address.street}#${castUserData.address.number}, ${castUserData.address.neighborhood}, ${castUserData.address.city}, ${castUserData.address.country}`}
              variante={'texto'}
            />
          </Grid>
        )}
      </Grid>

      <EmptyBox height={50} width={10} />

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomButton content={t('components.stepper.back')} onClick={handleStepBack} />
        <CustomButton
          type="submit"
          content={t('usersPages.userForm.createUser')}
          onClick={() => {
            void handleCreateUser();
          }}
          color="info"
        />
      </Box>
    </div>
  );
};

export default ValidateUserData;
