import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StepProps } from '../../../components/orgamisms/CustomStepper/CustomStepper';
import { UserModel } from '../../../models/UserModels/UserModel';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';
import { CompanyUserMode } from '../../../models/UserModels/CompanyUserModel';
import { defaulUserSchema } from '../schemas/UserSchema';

const useRegisterUser = () => {
  const { t } = useTranslation('commons');

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState<UserModel | VolunterUserModel | CompanyUserMode>(
    defaulUserSchema,
  );

  const [userType, setUserType] = useState<'volunter' | 'business'>('volunter');

  const [currentStep, setCurrentStep] = useState(0);
  const [stepList, setStepList] = useState<StepProps[]>([
    {
      completed: false,
      label: t('usersPages.userForm.usertype'),
      optional: false,
      id: 0,
    },
    {
      completed: false,
      label: t('usersPages.userForm.userInfo'),
      optional: false,
      id: 1,
    },
  ]);

  const handleUserType = (type: 'volunter' | 'business') => {
    setUserType(type);
  };

  const updateUserSteps = () => {
    const steps: StepProps[] = [
      {
        completed: false,
        label: t('usersPages.userForm.usertype'),
        optional: false,
        id: 0,
      },
      {
        completed: false,
        label: t('usersPages.userForm.userInfo'),
        optional: false,
        id: 1,
      },
    ];

    switch (userType) {
      case 'business': {
        const newStep: StepProps = {
          completed: false,
          label: t('usersPages.userForm.businessInfo'),
          optional: false,
          id: 2,
        };
        setStepList([...steps, newStep]);
        break;
      }
      case 'volunter': {
        const newStep: StepProps = {
          completed: false,
          label: t('usersPages.userForm.position'),
          optional: false,
          id: 2,
        };
        setStepList([...steps, newStep]);
        break;
      }
      default:
        break;
    }
  };

  const hanldeCompleteStep = (stepId: number) => {
    const newStepList = stepList.map(step => {
      if (step.id === stepId) return { ...step, completed: true };
      return step;
    });
    setStepList(newStepList);
  };

  const updateUserData = (newData: UserModel | VolunterUserModel | CompanyUserMode) => {
    setUserData({ ...newData });
    console.log('newData', newData);
  };

  return {
    userData,
    userType,
    stepList,
    currentStep,
    handleUserType,
    hanldeCompleteStep,
    setCurrentStep,
    updateUserSteps,
    updateUserData,
  };
};

export default useRegisterUser;
