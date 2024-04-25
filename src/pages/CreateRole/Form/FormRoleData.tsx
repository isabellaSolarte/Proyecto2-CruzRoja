import { useTranslation } from 'react-i18next';
import {ManagmentLayout,TabsAtomComponent,CustomButton,CustomText,CustomInput} from '../../../components';
import { CustomTextArea } from '../../../components';
import { Box } from '@mui/material';
import { RoleModel } from '../../../models';
import { PermissionCard } from '../components';
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
      remove,
      addRole,
      onSubmit,
      handleSubmit
    } = useCreateRolForm(updateRolData)
  return (
    <Box>
      <form onSubmit={() => handleSubmit(onSubmit)}>
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

        <CustomButton
          content={t('generalButtonText.save')}
          onClick={()=>{onSubmit()}}
          variant="contained"
          color="success"
        />
      </form>
      </Box>
      
  );
  };
  
export default FormRoleData;
  