import { useTranslation } from 'react-i18next';
import {
  ManagmentLayout,
  TabsAtomComponent,
  CustomButton,
  CustomText,
  CustomInput,
  ErrorText,
} from '../../../components';
import { useNavigate } from 'react-router-dom';
import { CustomTextArea } from '../../../components';
import { Box, TextField } from '@mui/material';
import { RoleModel } from '../../../models';
import { useCreateRolForm } from '../hooks/useCreateRolForm';
import { UseFormHandleSubmit } from 'react-hook-form';
import { PermissionCard } from '../Components';
import { RoleFormType } from '../types/RoleFormType';
import { PathNames } from '../../../core';

interface FormRoleDataProps {
  updateRolData: (newUserData: RoleModel) => void;
  rolData?: RoleModel;
}

const FormRoleData = ({ updateRolData, rolData }: FormRoleDataProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation('commons');
  const handleCreateButtonClick = () => {
    navigate(PathNames.ROLES);
  };

  const { permissionList, errors, register, remove, addRole, onSubmit, handleSubmit } =
    useCreateRolForm(updateRolData);
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={4}>
          <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />

          <CustomInput
            placeholder="Nombre rol"
            defaultValue={rolData?.typeRole}
            props={register('typeRole')}
            size="medium"
          />
          {errors.typeRole && (
            <ErrorText error={errors.typeRole.message} formErrorKey="userFormErrorsRole" />
          )}
        </Box>

        <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px' }}>
          <CustomText texto={'Listar los permisos'} variante="subtitulo" mandatory />
          {permissionList.map((permission, index) => (
            <PermissionCard
              key={permission.id}
              permission={permission}
              positiveAction={addRole}
              negativeAction={() => {
                remove(index);
              }}
            />
          ))}
        </Box>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton content={t('components.stepper.back')} onClick={handleCreateButtonClick} />
          <CustomButton
            content={t('generalButtonText.save')}
            type="submit"
            variant="contained"
            color="success"
          />
        </Box>
      </form>
    </Box>
  );
};

export default FormRoleData;
