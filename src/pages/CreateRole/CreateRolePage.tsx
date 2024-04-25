import { useTranslation } from 'react-i18next';
import {
  ManagmentLayout,
  TabsAtomComponent,
  CustomButton,
  CustomText,
  CustomInput,
} from '../../components';
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
        <Box>
          <TabsAtomComponent
            tabContentItem={[t('rolesPages.tabs.visualizar'), t('rolesPages.tabs.permissions')]}
          />
          <Box mt={5}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />
            <CustomInput placeholder="Nombre rol" size="medium" />
          </Box>

          <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px' }}>
            <CustomText texto={t('rolesPages.roleForm.type')} variante="subtitulo" mandatory />
            <CustomTextArea placeholder={t('rolesPages.roleForm.textTypeRol')} />
          </Box>
        </Box>
      }
    />
  );
};

export default CreateRolePage;
