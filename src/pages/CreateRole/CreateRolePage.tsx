import { Container, Grid } from '@mui/material';
import { CustomText, CustomButton, Tabs } from '../../components';
import CustomInput from '../../components/Atoms/Inputs/Input';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const CreateRolePage = () => {
  const { t } = useTranslation('commons');
  return (
    <Container sx={{ position: 'relative', marginInline: 10 }}>
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-6%',
        }}
      >
        <CustomButton
          content={t('generalButtonText.back')}
          onClick={() => {
            console.log('presionado');
          }}
          icon={<ArrowBackIosIcon />}
          variant="text"
          sx={{ color: '#000' }}
        />
      </div>
      <CustomText texto={t('pageTitles.createRole')} variante="titulo" />

      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Tabs
            tabContentItem={[t('rolesPages.tabs.visualizar'), t('rolesPages.tabs.permissions')]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomButton
            content={t('generalButtonText.save')}
            onClick={() => {}}
            variant="contained"
            color="success"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} direction={'column'} gap={5}>
        <Grid item xs={12} sm={6}>
          <CustomText texto={t('rolesPages.roleForm.name')} variante="texto" mandatory />

          <CustomInput placeholder={t('rolesPages.roleForm.name')} size={'large'} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomText texto={t('rolesPages.roleForm.color')} variante="texto" mandatory />
          <CustomText texto={t('rolesPages.roleForm.colorDescription')} variante="texto" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateRolePage;
