import DataTable from "../../components/orgamisms/DataTable/DataTable";
import { columns1 } from "../../configs/tablas/Columns";
import { esES } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material'; 
import { SearchBar } from '../../components';
import CustomButton from '../../components/Atoms/CustomButton/CustomButton'; 

const theme = createTheme(
  {},
  esES
);

const RolesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h4" align="left" sx={{ marginLeft: '40px' }}><strong>Roles</strong> </Typography> 
        <br /> 
        <Typography variant="subtitle1" align="left" sx={{ marginLeft: '40px' }} gutterBottom>Usa los roles para asignar permisos en el sistema</Typography> 
        <br /> 
        <div style={{ display: 'flex', alignItems: 'left', marginLeft: '40px', marginRight: '550px' }}> 
          <div style={{ flex: '1' }}> 
            <div style={{ width: '500px' }}>
              <SearchBar 
                placeholder="Buscar roles" 
                onSearch={() => {}} 
              />
            </div>
          </div>
          <CustomButton
            content="Crear rol"
            variant="contained"
            color="success"
            onClick={() => {
              // lógica para crear un nuevo rol
            }}
            style={{ marginLeft: '10px' }} 
          />
        </div>
        <DataTable enableCheckboxSelection={false} dataColumns={columns1} /> 
      </div>
    </ThemeProvider>
  );
};

export default RolesPage;
