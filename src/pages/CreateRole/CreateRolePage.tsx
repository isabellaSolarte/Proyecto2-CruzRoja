import { useTranslation } from 'react-i18next';
import {ManagmentLayout,TabsAtomComponent,CustomButton,CustomText,CustomInput} from '../../components';
import CustomTextArea from '../../components/Atoms/CustomTextArea/CustomTextArea';
import { Box } from '@mui/material';
import { useCreateRolForm } from './hooks/useCreateRolForm';
import { RoleModel } from '../../models';
import { FormRoleData } from './Form';

interface CreateRolFormProps{
  updateRolData : (rolData: RoleModel) => void;
}
//TODO preguntar sobre si se necesita una interfaz cuando manda el id del rol a editar
const CreateRolePage = ({ updateRolData}: CreateRolFormProps) => {
  const { t } = useTranslation('commons');
  const {
    permissionList, 
    isLoading, 
    error,
    rolData, //TODO VALIDATE DATA
    loadPermissions
  } = useCreateRolForm(updateRolData);
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createRole')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.save')}
          onClick={() => {}}
          variant="contained"
          color="success"
        />
      }
      generalContents={
        <FormRoleData
          rolData={rolData}
        />
      }
    />
  );
};

export default CreateRolePage;
