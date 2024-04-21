/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useTranslation } from 'react-i18next';
import { CustomButton, EmptyBox } from '../../../components';
import { CompanyUserMode, UserModel, VolunterUserModel } from '../../../models';
import { Box } from '@mui/material';

interface ValidateUserDataProps {
  userData: UserModel | CompanyUserMode | VolunterUserModel;
  handleNextStep: () => Promise<void>;
  handleStepBack: () => void;
}

const ValidateUserData = ({ userData, handleNextStep, handleStepBack }: ValidateUserDataProps) => {
  const { t } = useTranslation('commons');

  const handleCreateUser = async () => {
    await handleNextStep();
  };

  return (
    <div>
      {JSON.stringify(userData)}
      <CustomButton
        content={t('usersPages.userForm.createUser')}
        onClick={() => {
          void handleCreateUser();
        }}
      />
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
