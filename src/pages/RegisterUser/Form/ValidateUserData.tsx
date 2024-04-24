/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CustomButton, CustomText, EmptyBox } from '../../../components';
import { CompanyUserModel, VolunterUserModel } from '../../../models';
import { Box, Grid } from '@mui/material';

interface ValidateUserDataProps {
  userData: CompanyUserModel | VolunterUserModel;
  handleNextStep: () => Promise<void>;
  handleStepBack: () => void;
}

const ValidateUserData = ({ userData, handleNextStep, handleStepBack }: ValidateUserDataProps) => {
  const { t } = useTranslation('commons');

  const castUserData: any = userData;

  const handleCreateUser = async () => {
    await handleNextStep();
  };

  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={12}>
          <CustomText texto={castUserData.documentType} variante="texto" />
          <CustomText texto={castUserData.id.toString()} variante="texto" />
        </Grid>
        <Grid item md={6} xs={12}>
          <CustomText texto={`${castUserData.names} ${castUserData.lastNames}`} variante="texto" />
        </Grid>

        <Grid item md={6} xs={12}>
          <CustomText texto={castUserData.personalPhone} variante="texto" />
        </Grid>
        <Grid item md={6} xs={12}>
          <CustomText texto={castUserData.personalEmail} variante="texto" />
        </Grid>
        <Grid item md={6} xs={12}>
          <CustomText texto={castUserData.username} variante="texto" />
        </Grid>
        <Grid item md={6} xs={12}>
          <CustomText
            texto={castUserData.roles.map((r: { typeRole: any }) => `• ${r.typeRole}`).join('\n')}
            variante="texto"
          />
        </Grid>

        {castUserData.position !== undefined && (
          <Grid item md={6} xs={12}>
            <CustomText texto={castUserData.position} variante="texto" />
          </Grid>
        )}

        {castUserData.companyNit !== undefined && (
          <Grid item xs={12}>
            <CustomText texto={castUserData.companyNit.toString()} variante={'texto'} />
          </Grid>
        )}
        {castUserData.companyName !== undefined && (
          <Grid item xs={12}>
            <CustomText texto={castUserData.companyName} variante={'texto'} />
          </Grid>
        )}
        {castUserData.companyPhone !== undefined && (
          <Grid item xs={12}>
            <CustomText texto={castUserData.companyPhone} variante={'texto'} />
          </Grid>
        )}
        {castUserData.companyEmail !== undefined && (
          <Grid item xs={12}>
            <CustomText texto={castUserData.companyEmail} variante={'texto'} />
          </Grid>
        )}
        {castUserData.address !== undefined && (
          <Grid item xs={12}>
            <CustomText texto={JSON.stringify(castUserData.address)} variante={'texto'} />
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
