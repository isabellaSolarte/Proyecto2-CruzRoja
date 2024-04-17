import { Grid } from '@mui/material';
import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable } from '../../components';
import { useTranslation } from 'react-i18next';

// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const CreateRolePage = () => {
  const { t } = useTranslation('commons');

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createRole')} variante="titulo" />}
      description={
        <CustomText
          texto={
            'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
          variante="texto"
        />
      }
      generalContents={
        <Grid container spacing={2} direction={'column'} gap={5}>
          <Grid item xs={12} sm={6}>
            <CustomText texto={t('rolesPages.roleForm.name')} variante="texto" mandatory />
          </Grid>

          <Grid item xs={12} sm={6} sx={{}}>
            <CustomText texto={t('rolesPages.roleForm.color')} variante="texto" mandatory />
            <CustomText texto={t('rolesPages.roleForm.colorDescription')} variante="texto" />
          </Grid>
          <Grid item xs={12}>
            <DataTable
              columns={[
                {
                  field: 'name',
                  headerName: t('rolesPages.roleForm.table.name'),
                  width: 200,
                },
                {
                  field: 'description',
                  headerName: t('rolesPages.roleForm.table.description'),
                  width: 200,
                },
                {
                  field: 'actions',
                  headerName: t('rolesPages.roleForm.table.actions'),
                  width: 200,
                },
              ]}
              rows={[
                {
                  id: 1,
                  name: 'Administrador',
                  description: 'Rol de administrador',
                  actions: 'Editar',
                },
                {
                  id: 2,
                  name: 'Usuario',
                  description: 'Rol de usuario',
                  actions: 'Editar',
                },
              ]}
              pageSize={5}
            />
          </Grid>
        </Grid>
      }
      inputBar={<SearchBar placeholder={t('rolesPages.roleForm.name')} />}
      button={
        <CustomButton
          content={t('generalButtonText.save')}
          onClick={() => {}}
          variant="contained"
          color="success"
        />
      }
    />
  );
};

export default CreateRolePage;
