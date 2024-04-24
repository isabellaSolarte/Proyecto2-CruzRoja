import { useTranslation } from 'react-i18next';
import {ManagmentLayout,TabsAtomComponent,CustomButton,CustomText,CustomInput} from '../../../components';
import { CustomTextArea } from '../../../components';
import { Box } from '@mui/material';
import { RoleModel } from '../../../models';
import { useCreateRolForm } from '../hooks/useCreateRolForm';


interface FormRoleDataProps{
    updateRolData: (newUserData: RoleModel) => void,
    rolData?:RoleModel;
}

const FormRoleData = ({updateRolData,rolData}: FormRoleDataProps) => {

    const { t } = useTranslation('commons');
    const { 
      permissionList, 
      isLoading, 
      id,
      error,
      loadPermissions,
      loadRolData,
      register,
      onSubmit,
      handleSubmit
    } = useCreateRolForm(updateRolData)
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={4}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />
            <CustomInput placeholder="Nombre rol" defaultValue={rolData?.typeRole} props={register('typeRole')} size="medium" />
          </Box>

          <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px' }}>
            <CustomText
              texto={"Listar los permisos"}
              variante="subtitulo"
              mandatory
            />
          </Box>
      </form>
      </Box>
  );
  };
  
export default FormRoleData;
  