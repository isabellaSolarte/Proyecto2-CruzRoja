import { useTranslation } from 'react-i18next';
import {CustomButton,CustomText,CustomInput, ErrorText} from '../../../components';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
//import { RoleModel } from '../../../models';
import { PollutionTypeModel } from '../../../models';
//import { useCreateRolForm } from '../hooks/useCreateRolForm';
import { PollutionTypeCard } from '../Components';
import { PathNames } from '../../../core';
import { useEffect } from 'react';



interface PollutionTypeFormProps{
    //TODO hacer model category_pollutiontype
    //updateRolData: (newUserData: RoleModel) => void,
    //rolData?:RoleModel;
    updateRolData: (newUserData: any) => void,
    rolData?:any;
}

const PollutionTypeForm = ({updateRolData, rolData }: PollutionTypeFormProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation('commons');
    const handleCreateButtonClick = () => {
      navigate(PathNames.ROLES);
    };
    
    const { 
      permissionList, 
      errors,
      register,
      remove,
      addRole,
      removeRole,
      onSubmit,
      handleSubmit,
      reset,
    } = useCreateRolForm(updateRolData)
  
    
    useEffect(() => {
      if (rolData?.permissions) {
        rolData.permissions.forEach((permission) => {
          addRole(permission);
        });
      }
      reset(rolData)
    }, [rolData]);
    
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={4}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />
            <CustomText texto={t('rolesPages.roleForm.name')} variante="texto" mandatory />
            
            <CustomInput placeholder="Nombre rol" defaultValue={rolData?.typeRole} props={register('typeRole')} size="medium" />
            {errors.typeRole && <ErrorText  error={errors.typeRole.message} formErrorKey="userFormErrorsRole"/>}
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
                addedPermissions={rolData?.permissions}
                positiveAction={addRole}
                negativeAction={()=>{removeRole(permission.name)}}
                props={register('permissions')}
              />
            ))} 
            {errors.permissions && <ErrorText  error={errors.permissions.message} formErrorKey="userFormErrorsRole"/>}
          </Box>
          <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              
              <CustomButton
                  content={t('components.stepper.back')} 
                  onClick={handleCreateButtonClick}
              />
              <CustomButton
              content={t('generalButtonText.save')}
              type='submit'
              variant="contained"
              color="success"
            />
            
          </Box>    
      </form>
      </Box>
      
  );
  };
  
export default PollutionTypeForm;
  