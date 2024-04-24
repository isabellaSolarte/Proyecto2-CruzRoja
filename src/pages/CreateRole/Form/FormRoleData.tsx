import { useTranslation } from 'react-i18next';
import {ManagmentLayout,TabsAtomComponent,CustomButton,CustomText,CustomInput} from '../../../components';
import { CustomTextArea } from '../../../components';
import { Box } from '@mui/material';
import { RoleModel } from '../../../models';


interface FormRoleDataProps{
    rolData?:RoleModel;
}
const FormRoleData = ({rolData}: FormRoleDataProps) => {
    const { t } = useTranslation('commons');
  return (
    <Box>
          <Box mt={4}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />
            <CustomInput placeholder="Nombre rol" defaultValue={rolData?.typeRole} size="medium" />
          </Box>

          <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px' }}>
            <CustomText
              texto={"Listar los permisos"}
              variante="subtitulo"
              mandatory
            />
          </Box>
          
        </Box>
  );
  };
  
export default FormRoleData;
  