import ManagmentLayout from '../../components/Layouts/ManagmentLayout/ManagmentLayout';
import CustomText from '../../components/Atoms/CustomText/CustomText';
import CustomStepper from '../../components/orgamisms/CustomStepper/CustomStepper';
import SelectUserForm from './Form/SelectUserForm';
import useRegisterUser from './Hooks/useRegisterUser';
import { useEffect } from 'react';
import UserDataForm from './Form/UserDataForm';
import BusinessUserDataForm from './Form/BusinessUserDataForm';
import VolunterUserDataForm from './Form/VolunterUserDataForm';
import { useTranslation } from 'react-i18next';
import { ValidateUserData } from './Form';

const RegisterUserPage = () => {
  const { t } = useTranslation('commons');
  const {
    userData,
    userType,
    currentStep,
    stepList,
    updateUserSteps,
    handleUserType,
    updateUserData,
    handleNextStep,
    handleStepBack,
    createUser,
  } = useRegisterUser();

  useEffect(() => {
    updateUserSteps();
  }, [userType]);

  return (
    <ManagmentLayout
      title={<CustomText texto={t('Creación de usuario')} variante="titulo" />}
      generalContents={
        <CustomStepper activeStep={currentStep} stepsData={stepList}>
          {currentStep === 0 && (
            <SelectUserForm
              handleUserType={handleUserType}
              userType={userType}
              handleNext={handleNextStep}
            />
          )}
          {currentStep === 1 && (
            <UserDataForm
              {...{ updateUserData }}
              handleNextStep={handleNextStep}
              handleStepBack={handleStepBack}
              userData={userData}
            />
          )}
          {currentStep === 2 && userType === 'business' && (
            <BusinessUserDataForm
              updateUserData={updateUserData}
              handleNextStep={handleNextStep}
              handleStepBack={handleStepBack}
            />
          )}

          {currentStep === 2 && userType === 'volunter' && (
            <VolunterUserDataForm
              updateVolunterUserData={updateUserData}
              handleNextStep={handleNextStep}
              handleStepBack={handleStepBack}
            />
          )}

          {currentStep === 3 && (
            <ValidateUserData
              userData={userData}
              handleStepBack={handleStepBack}
              handleNextStep={createUser}
            />
          )}
        </CustomStepper>
      }
    />
  );
};

export default RegisterUserPage;
