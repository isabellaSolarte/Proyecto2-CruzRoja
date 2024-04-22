/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StepProps } from '../../../components/orgamisms/CustomStepper/CustomStepper';
import { UserModel } from '../../../models/UserModels/UserModel';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';
import { CompanyUserMode } from '../../../models/UserModels/CompanyUserModel';
import { defaulUserSchema } from '../schemas/UserSchema';
import { BusinessRegisterFormType, VolunterRegisterFormType } from '../types';
import { postUserCompany, postVolunteer } from '../../../services';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';

const useRegisterUser = () => {
  const navigate = useNavigate();
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

    const finalStep: StepProps = {
      completed: false,
      label: t('usersPages.userForm.validateData'),
      optional: false,
      id: 3,
    };

    switch (userType) {
      case 'business': {
        const newStep: StepProps = {
          completed: false,
          label: t('usersPages.userForm.businessInfo'),
          optional: false,
          id: 2,
        };
        setStepList([...steps, newStep, finalStep]);
        break;
      }
      case 'volunter': {
        const newStep: StepProps = {
          completed: false,
          label: t('usersPages.userForm.position'),
          optional: false,
          id: 2,
        };
        setStepList([...steps, newStep, finalStep]);
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

  const handleNextStep = () => {
    if (currentStep < stepList.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleStepBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const updateUserData = (
    newData: UserModel | VolunterRegisterFormType | BusinessRegisterFormType,
  ) => {
    setUserData({ ...userData, ...newData });
  };

  const createUser = async () => {
    handleNextStep();

    try {
      if (userType === 'volunter') {
        await postVolunteer(userData as VolunterUserModel);
      } else {
        await postUserCompany(userData as CompanyUserMode);
      }
      alert(`User created usaurio creado tipo ${userType} correctamente`);
      navigate(PathNames.USERS, { replace: true });
    } catch (e: any) {
      alert(`Error creating user ${e.message}`);
    }
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
    handleNextStep,
    handleStepBack,
    createUser,
  };
};

export default useRegisterUser;
