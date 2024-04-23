import { esES } from '@mui/material/locale';
import { createTheme, useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { ManagmentLayout, CustomButton,CustomText, CustomColumn} from "../../components";
import { Theme } from '@mui/material/styles';
import DataTable from "../../components/orgamisms/DataTable/DataTable";
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRolePage } from './hooks/useRolePage';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { RoleModel } from '../../models';
import { GridColDef } from '@mui/x-data-grid';

const theme = createTheme(
  {
    // Aquí puedes añadir personalizaciones adicionales de tu tema si lo necesitas
  },
  esES  // Aplica el locale español a todos los componentes de MUI
);

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const { roles, fetchRoles } = useRolePage();
  useEffect(() => {
    void fetchRoles();
  }, []);

  const roleModelToGridColDef = (role: RoleModel): GridColDef => {
    return {
      field: role.id.toString(), // Usa un campo único como identificador
      headerName: role.typeRole, // Usa el tipo de rol como encabezado de la columna
      width: 200, // Define el ancho de la columna según tus necesidades
      sortable: true, // Opcional: indica si la columna es ordenable
      filterable: true, // Opcional: indica si la columna es filtrable
    };
  };
  const rolesToGridColDefs = (roles: RoleModel[]): GridColDef[] => {
    return roles.map(roleModelToGridColDef);
  };
  
  const theme = useTheme<Theme>();
    
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
          <Grid container spacing={2} direction={'column'} gap={5}>
          <Grid item xs={12}>

          </Grid>                                       
        </Grid>                    
        </Box>
      }
      
    />
  );
};

export default RolesPage;