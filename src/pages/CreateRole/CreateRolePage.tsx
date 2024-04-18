import { Grid } from '@mui/material';
import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn } from '../../components';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const CreateRolePage = () => {
  const { t } = useTranslation('commons');

  const columns = [
   CustomColumn({ field: 'companyName', headerName: 'Empresa', width: 250, format: 'text', variante: 'texto' }),
   CustomColumn({ field: 'names', headerName: 'Nombre', width: 250, format: 'text', variante: 'texto' }),
   CustomColumn({ field: 'actions', headerName: 'Acciones', width:250, format: 'button', buttonDetails: [
     {
       content: 'Editar',
       variant: 'contained',
       color: 'primary',
       icon: <EditIcon />
     },
     {
       content: 'Observar',
       variant: 'contained',
       color: 'warning',
       icon: <VisibilityIcon />
     }
   ] }),
   CustomColumn({ 
     field: 'state', 
     headerName: 'Estado', 
     format: 'switch', 
     variante: 'texto',
     content: '', // Add the missing "content" property
     buttonDetails: [] // Add the missing "buttonDetails" property
   }),
   
 ];
  const rows = [
    { id: 1, companyName: 'Stark Industries', names: 'Jon Snow', state: true },
    { id: 2, companyName: 'Lannister Holdings', names: 'Cersei Lannister', state: false },
  ];
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
          <DataTable/>
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
