import ManagmentLayout from '../../components/Layouts/ManagmentLayout/ManagmentLayout';
import CustomText from '../../components/Atoms/CustomText/CustomText';
import CustomStepper from '../../components/orgamisms/CustomStepper/CustomStepper';
import SelectUserForm from './Form/SelectUserForm';
import useRegisterUser from './Hooks/useRegisterUser';
import { useEffect } from 'react';
import UserDataForm from './Form/UserDataForm';
import BusinessUserDataForm from './Form/BusinessUserDataForm';
import useBusinessUserDataForm from './Hooks/useBusinessUserDataForm';
import VolunterUserDataForm from './Form/VolunterUserDataForm';

const RegisterUserPage = () => {
  const {
    userType,
    currentStep,
    stepList,
    hanldeCompleteStep,
    setCurrentStep,
    updateUserSteps,
    handleUserType,
    updateUserData,
  } = useRegisterUser();

  const {
    register: registerBusinesss,
    errors: businessErrors,
    handleSubmit: handleSubmitBusiness,
    onSubmit: onSubmirBusiness,
  } = useBusinessUserDataForm();

  useEffect(() => {
    updateUserSteps();
  }, [userType]);

  return (
    <ManagmentLayout
      title={<CustomText texto="Creación de usuario" variante="titulo" />}
      generalContents={
        <CustomStepper
          completeStep={hanldeCompleteStep}
          activeStep={currentStep}
          setActiveStep={setCurrentStep}
          stepsData={stepList}
        >
          {currentStep === 0 && (
            <SelectUserForm handleUserType={handleUserType} userType={userType} />
          )}
          {currentStep === 1 && <UserDataForm {...{ updateUserData }} />}
          {currentStep === 2 && userType === 'business' && (
            <BusinessUserDataForm
              errors={businessErrors}
              handleSubmit={handleSubmitBusiness}
              onSubmit={onSubmirBusiness}
              register={registerBusinesss}
            />
          )}

          {currentStep === 2 && userType === 'volunter' && <VolunterUserDataForm />}
        </CustomStepper>
      }
    />
  );
};

export default RegisterUserPage;
