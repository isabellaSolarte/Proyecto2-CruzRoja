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

const CreateRolePage = () => {
  const { t } = useTranslation('commons');
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
            <CustomText
              texto={t('rolesPages.roleForm.description')}
              variante="subtitulo"
              mandatory
            />
          </Box>
          <CustomTextArea placeholder={t('rolesPages.roleForm.textDescription')} />
        </Box>
      }
    />
  );
};

export default CreateRolePage;
