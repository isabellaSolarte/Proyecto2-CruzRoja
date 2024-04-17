import { Grid } from '@mui/material';
import { CustomText, CustomButton, ManagmentLayout, Tabs } from '../../components';
import { useTranslation } from 'react-i18next';
import CustomInput from '../../components/Atoms/Inputs/Input';

// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const CreateRolePage = () => {
  const { t } = useTranslation('commons');

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createRole')} variante="titulo" />}
      description={
        <CustomText
          texto={
            'simply dummy text of the printing and typesetting industry, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
          variante="texto"
        />
      }
      generalContents={
        <Grid container spacing={2} direction={'column'} gap={5}>
          <Grid item xs={12} sm={6}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="texto" mandatory />
            <CustomInput placeholder={'nombre'} size={'large'} />
          </Grid>

          <Grid item xs={12} sm={6} sx={{}}>
            <CustomText texto={t('rolesPages.roleForm.color')} variante="texto" mandatory />
            <CustomText texto={t('rolesPages.roleForm.colorDescription')} variante="texto" />
          </Grid>
        </Grid>
      }
      button={
        <CustomButton
          content={t('generalButtonText.save')}
          onClick={() => {}}
          variant="contained"
          color="success"
        />
      }
      inputBar={
        <Tabs
          tabContentItem={[t('rolesPages.tabs.visualizar'), t('rolesPages.tabs.permissions')]}
        />
      }
    />
  );
};

export default CreateRolePage;
