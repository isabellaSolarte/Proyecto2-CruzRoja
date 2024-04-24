import { useTranslation } from 'react-i18next';
import {ManagmentLayout,TabsAtomComponent,CustomButton,CustomText,CustomInput} from '../../components';
import CustomTextArea from '../../components/Atoms/CustomTextArea/CustomTextArea';
import { Box } from '@mui/material';
import { useCreateRolForm } from './hooks/useCreateRolForm';
import { RoleModel } from '../../models';
import { FormRoleData } from './Form';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


interface CreateRolFormProps{
  updateRolData : (newUserData: RoleModel) => void;
  initialId?: string
}
//TODO preguntar sobre si se necesita una interfaz cuando manda el id del rol a editar
const CreateRolePage = ({ updateRolData, initialId}: CreateRolFormProps) => {
  const { t } = useTranslation('commons');
  const { id } = useParams();
  initialId = id
  const {
    rolData,
    loadRolData
  } = useCreateRolForm(updateRolData,initialId);
  useEffect(() =>{
    loadRolData();
  },[initialId] );
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
          updateRolData={updateRolData}
        />
      }
    />
  );
};

export default CreateRolePage;
