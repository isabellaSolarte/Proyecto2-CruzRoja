import { esES } from '@mui/material/locale';
import { createTheme, useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { ManagmentLayout, CustomButton,CustomText, CustomColumn, SearchBar} from "../../components";
import { Theme } from '@mui/material/styles';
import DataTable from "../../components/orgamisms/DataTable/DataTable";
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid } from '@mui/material';


const theme = createTheme(
  {
    // Aquí puedes añadir personalizaciones adicionales de tu tema si lo necesitas
  },
  esES  // Aplica el locale español a todos los componentes de MUI
);

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const theme = useTheme<Theme>();
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.rol'), width: 250, format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
    CustomColumn({ field: 'rol', headerName: t('usersPages.userTable.users'), width: 250, format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), width:250, format: 'button', variante: 'texto', content: '', buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'primary',
        icon: <EditIcon />
      } 
    ] }),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto', content: '', buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'primary',
        icon: <EditIcon />
      } 
    ] })
  ];
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.roles')} variante="titulo" />}
      
      actionsContent={
        <CustomButton
            content={t('generalButtonText.create')}
            variant="contained"
            color="success"
            onClick={() => {
              
            }}
            style={{ marginLeft: '10px' }} 
          />
      }
      generalContents={
        <Box>       
          <CustomText texto={t('rolesPages.roleForm.rolePageDescription')} variante="subtitulo" />
          <SearchBar placeholder={t('generalButtonText.search')} />
          <Grid container spacing={2} direction={'column'} gap={5}>
          <Grid item xs={12}>
            <DataTable enableCheckboxSelection={false} dataColumns={columns} />
          </Grid>  
        </Grid>
        </Box>
  
      }
      
    />
  );
};

export default RolesPage;